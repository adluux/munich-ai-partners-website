/**
 * Renders a schema.org JSON-LD block. It needs to be present in the static
 * HTML (search engines and AI crawlers read it) but does not need to execute,
 * so a plain server-rendered <script> is correct here.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
