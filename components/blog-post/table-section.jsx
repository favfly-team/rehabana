import { PrismicRichText } from "@prismicio/react";

const TableSection = ({ slice }) => {
  const caption = slice.primary?.caption?.trim?.() ?? "";
  const table = slice.primary?.table;
  const headRows = table?.head?.rows ?? [];
  const bodyRows = table?.body?.rows ?? [];

  if (!Array.isArray(bodyRows) || bodyRows.length === 0) return null;

  return (
    <div className="mx-auto" style={{ maxWidth: "1000px" }}>
      <div className="cs_blog_details cs_white_bg cs_radius_10 mb-4">
        <div className="cs_blog_content">
          {caption ? <h3 className="cs_table_caption">{caption}</h3> : null}

          <div className="cs_table_wrap" role="region" aria-label="Table">
            <table className="cs_table">
              {headRows.length > 0 ? (
                <thead>
                  {headRows.map((row) => (
                    <tr key={row.key}>
                      {row.cells?.map((cell) => (
                        <th key={cell.key} scope="col">
                          <PrismicRichText
                            field={cell.content}
                            components={tableCellComponents}
                          />
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
              ) : null}

              <tbody>
                {bodyRows.map((row) => (
                  <tr key={row.key}>
                    {row.cells?.map((cell) => {
                      const isHeaderCell = cell.type === "header";
                      const CellTag = isHeaderCell ? "th" : "td";
                      return (
                        <CellTag
                          key={cell.key}
                          scope={isHeaderCell ? "row" : undefined}
                        >
                          <PrismicRichText
                            field={cell.content}
                            components={tableCellComponents}
                          />
                        </CellTag>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const tableCellComponents = {
  paragraph: ({ children }) => <p className="cs_table_p">{children}</p>,
  heading2: ({ children }) => <strong className="cs_table_strong">{children}</strong>,
  heading3: ({ children }) => <strong className="cs_table_strong">{children}</strong>,
  heading4: ({ children }) => <strong className="cs_table_strong">{children}</strong>,
  heading5: ({ children }) => <strong className="cs_table_strong">{children}</strong>,
  heading6: ({ children }) => <strong className="cs_table_strong">{children}</strong>,
  list: ({ children }) => <ul className="cs_table_ul">{children}</ul>,
  oList: ({ children }) => <ol className="cs_table_ol">{children}</ol>,
  listItem: ({ children }) => <li className="cs_table_li">{children}</li>,
  hyperlink: ({ children, node }) => (
    <a
      href={node.data?.url}
      target={node.data?.target}
      rel={node.data?.target === "_blank" ? "noopener noreferrer" : undefined}
      className="cs_table_link"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="cs_table_strong">{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
};

export default TableSection;

