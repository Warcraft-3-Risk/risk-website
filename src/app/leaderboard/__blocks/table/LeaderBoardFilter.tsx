import React, { useState } from 'react';
import content from '../../../content/content.json';

const LeaderBoardFilter = ({
  onFilterChange,
}: {
  onFilterChange: (filter: string) => void;
}) => {
  const [filter, setFilter] = useState('highest');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="leaderboard-filter" className="mr-2 text-white">
        {content.leaderboard['leaderboard.sortby']}
      </label>
      <select
        id="leaderboard-filter"
        value={filter}
        onChange={handleChange}
        className="p-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        aria-label="Sort leaderboard by"
      >
        <option value="highest">
          {content.leaderboard['leaderboard.highestscore']}
        </option>
        <option value="lowest">
          {content.leaderboard['leaderboard.lowestscore']}
        </option>
      </select>
    </div>
  );
};

export default LeaderBoardFilter;
