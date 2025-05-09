import React from 'react';
import { LeaderboardEntry } from '@/core/utils/UseRealLeaderboard';
import Image from 'next/image';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/leaderboard/l-leaderboard-table.scss';

interface Props {
  currentItems: LeaderboardEntry[];
  startIndex: number;
  calculateWinRate: (wins: number, losses: number) => string;
}

const LeaderboardTableMobile: React.FC<Props> = ({
  currentItems,
  startIndex,
  calculateWinRate,
}) => {
  const labels = content.leaderboardmobile; // Now using the new mobile-specific section

  return (
    <div className="space-y-2">
      {currentItems.map((item, index) => (
        <div key={item.id} className="mobilecard border-b px-4 py-3 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-5 text-sm font-medium">
                {startIndex + index + 1}
              </span>
              <Image
                src="/images/twitch-tile.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <span className="elotext text-sm">
                {labels.elo}: {item.elo}
              </span>
            </div>

            <span className="username text-sm font-semibold truncate max-w-[100px]">
              {item.username}
            </span>
          </div>

          <div className="cardtext grid grid-cols-2 gap-y-1 mt-2 text-xs">
            <div>
              {labels.wins}: {item.wins}
            </div>
            <div>
              {labels.losses}: {item.losses}
            </div>
            <div>
              {labels.winrate}: {calculateWinRate(item.wins, item.losses)}
            </div>
            <div>
              {labels.sigma}: {item.sigma?.toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardTableMobile;
