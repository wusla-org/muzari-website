// Injects JSON-LD structured data for search engines and AI crawlers.
// JSON is serialized with HTML-unsafe characters escaped to prevent script injection.
export default function SchemaOrg({
  data,
}: {
  data: Record<string, unknown>;
}) {
  // Escape </script> sequences and HTML-special chars so the inline script
  // cannot break out of its tag even if a string value contains them.
  const safe = JSON.stringify(data)
    .replace(/&/g, "\\u0026")
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e");

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema is developer-defined, not user input
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}
