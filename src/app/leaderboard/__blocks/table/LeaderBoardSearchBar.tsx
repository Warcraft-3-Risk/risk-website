import React, { useState } from 'react';

const LeaderBoardSearchBar = ({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Player..."
      value={query}
      onChange={handleSearch}
      className="p-2 bg-gray-800 text-white rounded-md w-full"
    />
  );
};

export default LeaderBoardSearchBar;
