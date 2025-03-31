import React from "react";

interface PlayerProps {
  rank: number;
  name: string;
  score: number;
}

const LeaderBoardPlayerRow: React.FC<PlayerProps> = ({ rank, name, score }) => {
  return (
    <tr className="text-center bg-gray-900">
      <td className="p-2 border border-gray-600">{rank}</td>
      <td className="p-2 border border-gray-600">{name}</td>
      <td className="p-2 border border-gray-600">{score}</td>
    </tr>
  );
};

export default LeaderBoardPlayerRow;
