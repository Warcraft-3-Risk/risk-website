import React from 'react';

interface PlayerProps {
  rank: number;
  name: string;
  score: number;
}

const LeaderBoardPlayerRow: React.FC<PlayerProps> = ({ rank, name, score }) => {
  const formattedScore = score.toLocaleString();

  return (
    <tr className="text-center bg-gray-900">
      <td className="p-2 border border-gray-600" aria-label={`Rank: ${rank}`}>
        <span>{rank}</span>
      </td>
      <td className="p-2 border border-gray-600" aria-label={`Player: ${name}`}>
        <span>{name}</span>
      </td>
      <td className="p-2 border border-gray-600" aria-label={`Score: ${score}`}>
        <span>{formattedScore}</span>
      </td>
    </tr>
  );
};

export default LeaderBoardPlayerRow;
