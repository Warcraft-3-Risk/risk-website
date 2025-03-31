'use client';

import LeaderBoardTable from './__blocks/table/LeaderBoardTable';
import LeaderBoardFilter from './__blocks/table/LeaderBoardFilter';
import LeaderBoardSearchBar from './__blocks/table/LeaderBoardSearchBar';
import LeaderBoardPagination from './__blocks/table/LeaderBoardPagination';
import { useState } from 'react';

const dummyData = [
  { rank: 1, name: 'Player One', score: 5000 },
  { rank: 2, name: 'Player Two', score: 4500 },
  { rank: 3, name: 'Player Three', score: 4200 },
  { rank: 4, name: 'Player  Four', score: 3900 },
  { rank: 5, name: 'Player  Five', score: 3800 },
  { rank: 6, name: 'Player  Six', score: 3600 },
  { rank: 7, name: 'Player  Seven', score: 3400 },
  { rank: 8, name: 'Player  Eight', score: 3200 },
  { rank: 9, name: 'Player  Nine', score: 3000 },
  { rank: 10, name: 'Player Ten', score: 2800 },
];

export default function LeaderboardPage() {
  const [filter, setFilter] = useState('highest');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  let filteredData = dummyData.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (filter === 'highest') {
    filteredData = filteredData.sort((a, b) => b.score - a.score);
  } else if (filter === 'lowest') {
    filteredData = filteredData.sort((a, b) => a.score - b.score);
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
      <p className="text-gray-400 mb-6">Welcome to the leaderboard page!</p>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <LeaderBoardSearchBar onSearch={setSearchQuery} />
        <LeaderBoardFilter onFilterChange={setFilter} />
      </div>

      <LeaderBoardTable
        filter={filter}
        searchQuery={searchQuery}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />

      <LeaderBoardPagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(newCount) => {
          setItemsPerPage(newCount);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}
