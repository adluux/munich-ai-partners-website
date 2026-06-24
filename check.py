from html.parser import HTMLParser
from pathlib import Path
import subprocess
import sys

BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0v6PZydheL8-0l8arI22xHx1dA8xCfDbfel5C2ClMbEk4A3z1ydExnDRb4E--EAlmC93C8c74U"
FONT_URL = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500&display=swap"
PAGES = {
    "homepage": Path("out/index.html"),
    "urbanpoint": Path("out/case-study-urbanpoint.html"),
    "starise-ai": Path("out/case-study-starise-ai.html"),
    "fastreview": Path("out/case-study-fastreview.html"),
    "legal": Path("out/legal.html"),
    "privacy": Path("out/privacy.html"),
}
SUBPAGES = ["urbanpoint", "starise-ai", "fastreview", "legal", "privacy"]
CASE_LINKS = [
    "/case-study-urbanpoint.html",
    "/case-study-starise-ai.html",
    "/case-study-fastreview.html",
]
LINKEDIN_LINKS = [
    "https://www.linkedin.com/in/skokoivan/",
    "https://www.linkedin.com/in/tracha/",
    "https://www.linkedin.com/in/michaelmalderle/",
]
SUBPAGE_NAV = {
    "Case Studies": "/#results",
    "How we work": "/#how",
    "Team": "/#team",
    "FAQ": "/#faq",
}

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self._stack = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == "a":
            self._stack.append({"attrs": attrs_dict, "text": ""})

    def handle_data(self, data):
        if self._stack:
            self._stack[-1]["text"] += data

    def handle_endtag(self, tag):
        if tag == "a" and self._stack:
            item = self._stack.pop()
            item["text"] = " ".join(item["text"].split())
            self.links.append(item)

def parse_links(html):
    parser = LinkParser()
    parser.feed(html)
    return parser.links

def result(label, passed, detail=""):
    marker = "PASS" if passed else "FAIL"
    print(f"[{marker}] {label}{(': ' + detail) if detail else ''}")
    return passed

def hrefs(links):
    return [link["attrs"].get("href", "") for link in links]

def main():
    failures = []
    build = subprocess.run(["npm", "run", "build"], text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    if not result("build completes", build.returncode == 0, "npm run build" if build.returncode else ""):
        print(build.stdout)
        return 1

    page_html = {}
    page_links = {}
    for name, path in PAGES.items():
        exists = path.exists()
        if not result(f"{name}: file exists", exists, str(path)):
            failures.append(f"{name}: file missing")
            continue
        html = path.read_text(encoding="utf-8")
        links = parse_links(html)
        page_html[name] = html
        page_links[name] = links

        ctas = [link for link in links if "Book" in link["text"] or "consultation" in link["text"]]
        booking_ok = bool(ctas) and all(
            link["attrs"].get("href") == BOOKING_URL and link["attrs"].get("target") == "_blank"
            for link in ctas
        )
        if not result(f"{name}: booking URL present on every CTA with target blank", booking_ok, f"ctas={len(ctas)}"):
            failures.append(f"{name}: booking CTA check")

        footer = set(hrefs(links))
        footer_ok = "/legal.html" in footer and "/privacy.html" in footer
        if not result(f"{name}: footer hrefs are /legal.html and /privacy.html", footer_ok):
            failures.append(f"{name}: footer links")

        no_hash = 'href="#"' not in html and "href='#'" not in html
        if not result(f"{name}: zero href=# remaining", no_hash):
            failures.append(f"{name}: href=# remains")

        font_ok = FONT_URL in html
        if not result(f"{name}: Google Fonts link present", font_ok):
            failures.append(f"{name}: Google Fonts link")

        media_ok = "720px" in html and "@media" in html
        if not result(f"{name}: 720px media query present", media_ok):
            failures.append(f"{name}: media query")

    home_links = page_links.get("homepage", [])
    home_hrefs = set(hrefs(home_links))
    for href in CASE_LINKS:
        if not result(f"homepage: case-study card href {href}", href in home_hrefs):
            failures.append(f"homepage: missing {href}")
    for href in LINKEDIN_LINKS:
        if not result(f"homepage: LinkedIn href {href}", href in home_hrefs):
            failures.append(f"homepage: missing {href}")

    for name in SUBPAGES:
        links = page_links.get(name, [])
        if not links:
            continue
        back = [link for link in links if "Back" in link["text"]]
        back_ok = bool(back) and all(link["attrs"].get("href") == "/" for link in back)
        if not result(f"{name}: back link = /", back_ok):
            failures.append(f"{name}: back link")
        for text, href in SUBPAGE_NAV.items():
            nav_ok = any(link["text"] == text and link["attrs"].get("href") == href for link in links)
            if not result(f"{name}: subpage nav {text} -> {href}", nav_ok):
                failures.append(f"{name}: nav {text}")

    home = page_html.get("homepage", "")
    faq_ok = "function toggle" in home and "classList.toggle('open')" in home
    if not result("homepage: FAQ accordion JS present", faq_ok):
        failures.append("homepage: FAQ JS")

    if failures:
        print("\nREMAINING FAILS")
        for failure in failures:
            print(f"- {failure}")
        return 1
    return 0

if __name__ == "__main__":
    sys.exit(main())
