import React from 'react';
import CTAButton from '@/app/components/ui/CTAButtons';

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
      <CTAButton
        variant="pagination"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={currentPage === 1 ? 'is-disabled' : 'is-enabled'}
      >
        Previous
      </CTAButton>

      <span className="text-white font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <CTAButton
        variant="pagination"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? 'is-disabled' : 'is-enabled'}
      >
        Next
      </CTAButton>
    </div>
  );
};

export default LeaderBoardPagination;
