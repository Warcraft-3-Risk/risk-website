import rawData from '@/app/data/players.json';

export interface LeaderboardEntry {
  id: number;
  username: string;
  gold: number;
  elo: number;
  wins: number;
  losses: number;
  sigma?: number;
}

export const dummyData: LeaderboardEntry[] = rawData.map((player, index) => ({
  id: index + 1,
  username: player.name,
  gold: 0,
  elo: Math.round(player.elo),
  wins: player.win,
  losses: player.loss,
  sigma: player.sigma,
}));
