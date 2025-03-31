import React, { useState } from "react";

const LeaderBoardFilter = ({ onFilterChange }: { onFilterChange: (filter: string) => void }) => {
  const [filter, setFilter] = useState("highest");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="mr-2 text-white">Sort by:</label>
      <select value={filter} onChange={handleChange} className="p-2 bg-gray-800 text-white rounded-md">
        <option value="highest">Highest Score</option>
        <option value="lowest">Lowest Score</option>
      </select>
    </div>
  );
};

export default LeaderBoardFilter;
