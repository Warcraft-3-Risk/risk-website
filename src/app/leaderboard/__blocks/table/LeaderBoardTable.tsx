//TODO Fix so we use the actual data instead of dummy data
// * Created a isExcerpt prop to show only the top 3 players in the excerpt, let us use it for the homepage *
'use client';

import React, { useEffect } from 'react';

interface LeaderBoardTableProps {
  filter: string;
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
  onFilteredDataChange?: (count: number) => void;
  isExcerpt?: boolean;
}

const dummyData = [
  { rank: 1, name: 'Player One', score: 4391 },
  { rank: 2, name: 'Player Two', score: 4215 },
  { rank: 3, name: 'Player Three', score: 3987 },
  { rank: 4, name: 'Player Four', score: 3742 },
  { rank: 5, name: 'Player Five', score: 3628 },
  { rank: 6, name: 'Player Six', score: 3489 },
  { rank: 7, name: 'Player Seven', score: 3354 },
  { rank: 8, name: 'Player Eight', score: 3198 },
  { rank: 9, name: 'Player Nine', score: 3056 },
  { rank: 10, name: 'Player Ten', score: 2838 },
];

const LeaderBoardTable: React.FC<LeaderBoardTableProps> = ({
  filter,
  searchQuery,
  currentPage,
  itemsPerPage,
  onFilteredDataChange,
  isExcerpt = false,
}) => {
  let filteredData = dummyData.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (filter === 'highest') {
    filteredData = filteredData.sort((a, b) => b.score - a.score);
  } else if (filter === 'lowest') {
    filteredData = filteredData.sort((a, b) => a.score - b.score);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const excerptData = isExcerpt ? paginatedData.slice(0, 3) : paginatedData; // Only show top 3 for the excerpt

  useEffect(() => {
    if (onFilteredDataChange) {
      onFilteredDataChange(filteredData.length);
    }
  }, [filteredData.length, onFilteredDataChange]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
      <table className="w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2 border border-gray-600">Rank</th>
            <th className="p-2 border border-gray-600">Player</th>
            <th className="p-2 border border-gray-600">Score</th>
          </tr>
        </thead>
        <tbody>
          {excerptData.length > 0 ? (
            excerptData.map((player) => (
              <tr key={player.rank} className="text-center bg-gray-900">
                <td className="p-2 border border-gray-600">{player.rank}</td>
                <td className="p-2 border border-gray-600">{player.name}</td>
                <td className="p-2 border border-gray-600">{player.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center text-gray-400">
                No players found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoardTable;
