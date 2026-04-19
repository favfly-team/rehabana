// ============================================================
// SchemaMarkup.tsx — Reusable JSON-LD Schema Component
// Place this in: app/components/SchemaMarkup.tsx
// ============================================================

interface SchemaMarkupProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaMarkup({ data }: SchemaMarkupProps) {
  const jsonLd = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
