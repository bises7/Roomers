import { NextPage } from "next";
import { Pagination } from "react-bootstrap";

interface Props {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (pageNumber: number) => {};
  className: string;
}

const PaginationComponent: NextPage<Props> = ({
  totalItems,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  className,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <Pagination className={className}>
      <Pagination.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {Array.from({ length: totalPages }, (_, idx) => (
        <Pagination.Item
          key={idx + 1}
          active={currentPage === idx + 1}
          onClick={() => handlePageChange(idx + 1)}
        >
          {idx + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComponent;
