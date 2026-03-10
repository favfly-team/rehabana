const pastelPalette = [
  "#E3F2FD", // light blue
  "#FCE4EC", // light pink
  "#E8F5E9", // light green
  "#FFF3E0", // light orange
  "#F3E5F5", // light purple
];

const DiseasePills = ({ items, wrapperClassName = "" }) => {
  const labels = items?.map((disease) => disease?.text).filter(Boolean);

  if (!labels?.length) return null;

  return (
    <div className={`d-flex flex-wrap gap-2 ${wrapperClassName}`}>
      {labels.map((text, i) => (
        <span
          key={i}
          className="cs_disease_pill"
          style={{
            display: "inline-block",
            padding: "4px 8px",
            fontSize: "13px",
            lineHeight: "1",
            fontWeight: 400,
            borderRadius: "9999px",
            backgroundColor: pastelPalette[i % pastelPalette.length],
            color: "#1F2933",
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default DiseasePills;
