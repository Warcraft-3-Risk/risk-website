// hooks/useLeaderboardData.ts
import rawData from '@/app/data/players.json';

export interface LeaderboardEntry {
  id: number;
  username: string;
  elo: number;
  wins: number;
  losses: number;
  sigma?: number;
}

export function useLeaderboardData(limit?: number): LeaderboardEntry[] {
  const mappedData: LeaderboardEntry[] = rawData.map((player, index) => ({
    id: index + 1,
    username: player.name,
    score: 0,
    gold: 0,
    elo: Math.round(player.elo),
    wins: player.win,
    losses: player.loss,
    sigma: player.sigma,
  }));

  const sorted = mappedData.sort((a, b) => b.elo - a.elo);
  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
}
