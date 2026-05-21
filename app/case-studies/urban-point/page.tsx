import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/content";

export const metadata = {
  title: "Urban Point Case Study | Corvant AI",
  description:
    "How Urban Point accelerated software development 4x with AI-assisted engineering.",
};

export default function UrbanPointCaseStudyPage() {
  const content = getContent("en");

  return (
    <>
      <Navbar content={content} locale="en" showNavigation={false} />
      <main className="bg-background px-6 py-12 md:py-16">
        <article className="mx-auto flex max-w-prose flex-col gap-12">
          <header className="flex flex-col gap-6">
            <p className="font-sans text-[14px] font-medium uppercase tracking-[0.15em] text-text-secondary">
              Case Study
            </p>
            <h1 className="font-heading text-[36px] font-bold leading-[1.12] text-primary md:text-[60px]">
              Urban Point accelerated software development 4x with AI-assisted engineering
            </h1>
          </header>

          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[34px]">
              Customer
            </h2>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              Urban Point is a Qatar-based savings and lifestyle app that helps consumers access offers across dining, beauty, health, leisure, and everyday experiences. The company also gives merchants a data-driven channel to attract and retain customers, increase revenue, and reach thousands of users daily. Urban Point is partnered with Ooredoo and is publicly described as one of Qatar’s leading savings apps.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[34px]">
              Problem
            </h2>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              Urban Point’s engineering team was spending too much time moving from product ideas to production-ready software.
            </p>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              The workflow had too many manual steps: assets and designs were created in Figma, then converted into front-end code, then translated into back-end requirements, validations, integrations, bug fixes, and deployment work. AI coding tools were available, and the team knew they could create leverage, but there were no clear standards for how engineers should use AI to generate code, review output, or maintain quality.
            </p>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              The issue was not lack of technology. It was lack of a standardized AI engineering workflow: what context to give the AI, when to use it, how to review its output, how to align front-end and back-end work, and how to make sure speed did not come at the expense of quality.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[34px]">
              Solution
            </h2>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              We redesigned the software development process around a clear AI-assisted workflow.
            </p>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              The team broke the work into repeatable stages: Figma assets, complete requirements, front-end code generation, code review, back-end requirements aligned to the front end, back-end code generation, validation, bug fixing, final review, and deployment.
            </p>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              We also documented the engineering practices that previously lived only in developers’ heads. This became a practical AI instruction layer: coding standards, review criteria, preferred patterns, validation rules, and context that AI tools needed to produce usable code. Instead of asking AI to “generate code,” developers gave it structured context and clear quality expectations.
            </p>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              Urban Point used foundational LLMs from Anthropic and OpenAI, with Codex and Cursor supporting code generation and review. The key change was not simply adding tools; it was creating the operating system for using them consistently.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[34px]">
              Results
            </h2>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              Urban Point achieved approximately 4x faster software development while maintaining the same quality as manual development.
            </p>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              The same engineering team can now produce, review, fix, and ship significantly more code without adding headcount. The documented AI standards also improved consistency: engineers now have a shared way to generate code, review AI output, and preserve quality across front-end and back-end work.
            </p>
            <div className="flex flex-col gap-3 rounded-lg border border-border-light bg-card p-6">
              <h3 className="font-sans text-[20px] font-medium leading-[1.4] text-primary">
                Key outcomes
              </h3>
              <ul className="list-disc space-y-2 pl-5 font-sans text-[16px] font-normal leading-[1.6] text-text">
                <li>4x faster software development</li>
                <li>Same quality standard as manual development, standardized across organization</li>
                <li>More output from the same engineering team</li>
                <li>Documented AI coding and review best practices</li>
                <li>More engineering capacity for high-value product work</li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-[28px] font-bold leading-[1.3] text-primary md:text-[34px]">
              Why it matters
            </h2>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-text">
              Urban Point turned AI coding from an inconsistent experiment into a repeatable engineering process that lets the same team ship 4x more work without sacrificing quality.
            </p>
          </section>
        </article>
      </main>
      <Footer content={content} />
    </>
  );
}
