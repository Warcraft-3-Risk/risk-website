import React from 'react';
import CTAButton from '@/app/components/ui/CTAButtons';
import content from '@/app/data/content.json';

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
  const leaderboardContent = content.leaderboards;

  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      <CTAButton
        variant="pagination"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={currentPage === 1 ? 'is-disabled' : 'is-enabled'}
      >
        {leaderboardContent['leaderboardsection.previous']}
      </CTAButton>

      <span className="leaderboard_next_text">
        {leaderboardContent['leaderboardsection.pagination']} {currentPage}
        {leaderboardContent['leaderboardsection.of']} {totalPages}
      </span>

      <CTAButton
        variant="pagination"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? 'is-disabled' : 'is-enabled'}
      >
        {leaderboardContent['leaderboardsection.next']}
      </CTAButton>
    </div>
  );
};

export default LeaderBoardPagination;
