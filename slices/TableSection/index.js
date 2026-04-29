import TableSectionDefault from "@/components/blog-post/table-section";

/**
 * @typedef {import("@prismicio/client").Content.TableSectionSlice} TableSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TableSectionSlice>} TableSectionProps
 * @type {import("react").FC<TableSectionProps>}
 */
const TableSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <TableSectionDefault slice={slice} />;
  }
};

export default TableSection;

