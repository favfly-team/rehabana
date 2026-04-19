/**
 * @param {{ data: object | object[] }} props
 */
const SchemaMarkup = ({ data }) => {
  const jsonLd = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SchemaMarkup;
