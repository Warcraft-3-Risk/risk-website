import React from 'react';

interface LeaderBoardPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const LeaderBoardPagination: React.FC<LeaderBoardPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-5 py-2 font-medium rounded-md transition ${
          currentPage === 1
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-yellow-500 text-black hover:bg-yellow-600'
        }`}
      >
        Previous
      </button>
      <span className="text-white font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-5 py-2 font-medium rounded-md transition ${
          currentPage === totalPages
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-yellow-500 text-black hover:bg-yellow-600'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default LeaderBoardPagination;
