import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (count: number) => void;
}

const LeaderBoardPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
      <button
        className="p-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      <span className="text-white">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="p-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>

      <select
        className="p-2 bg-gray-800 text-white rounded-md"
        value={itemsPerPage}
        onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
      </select>
    </div>
  );
};

export default LeaderBoardPagination;
