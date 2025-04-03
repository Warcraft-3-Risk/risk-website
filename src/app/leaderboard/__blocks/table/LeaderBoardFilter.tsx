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
      <label className="mr-2 text-white">
        {content.leaderboard['leaderboard.sortby']}
      </label>
      <select
        value={filter}
        onChange={handleChange}
        className="p-2 bg-gray-800 text-white rounded-md"
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
