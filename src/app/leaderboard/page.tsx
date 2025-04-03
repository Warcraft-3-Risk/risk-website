'use client';

import { useState } from 'react';
import LeaderBoardTable from './__blocks/table/LeaderBoardTable';
import LeaderBoardFilter from './__blocks/table/LeaderBoardFilter';
import LeaderBoardSearchBar from './__blocks/table/LeaderBoardSearchBar';
import LeaderBoardPagination from './__blocks/table/LeaderBoardPagination';
import content from '../content/content.json';

export default function LeaderboardPage() {
  const [filter, setFilter] = useState('highest');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalFilteredItems, setTotalFilteredItems] = useState(0);

  const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        {content.leaderboard['leaderboard.title']}
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <LeaderBoardSearchBar onSearch={setSearchQuery} />
        <LeaderBoardFilter onFilterChange={setFilter} />
      </div>

      <LeaderBoardTable
        filter={filter}
        searchQuery={searchQuery}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onFilteredDataChange={setTotalFilteredItems}
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
