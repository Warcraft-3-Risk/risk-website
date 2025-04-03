import React, { useState, useEffect } from 'react';

const LeaderBoardSearchBar = ({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="🔍 Search Player..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="p-2 bg-gray-800 text-white rounded-md w-full border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  );
};

export default LeaderBoardSearchBar;
