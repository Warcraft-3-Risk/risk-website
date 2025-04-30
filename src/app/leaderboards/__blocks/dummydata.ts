export interface LeaderboardEntry {
  id: number;
  username: string;
  score: number;
  gold: number;
  elo: number;
  wins: number;
  losses: number;
}

function calculateElo(wins: number, losses: number): number {
  const totalGames = wins + losses;
  if (totalGames === 0) return 1500;

  const winRate = wins / totalGames;
  const baseElo = 1500 + (winRate - 0.5) * 1000; // e.g., 0.6 winrate = 1600

  const variance = Math.max(25, 100 - totalGames);
  const noise = Math.floor(Math.random() * variance * 2) - variance;

  return Math.round(baseElo + noise);
}

export const dummyData: LeaderboardEntry[] = [
  {
    id: 1,
    username: 'Player 1',
    score: 1500,
    gold: 1200,
    wins: 75,
    losses: 25,
    elo: 0,
  },
  {
    id: 2,
    username: 'Player 2',
    score: 1400,
    gold: 1100,
    wins: 68,
    losses: 32,
    elo: 0,
  },
  {
    id: 3,
    username: 'Player 3',
    score: 1300,
    gold: 900,
    wins: 60,
    losses: 40,
    elo: 0,
  },
  {
    id: 4,
    username: 'Player 4',
    score: 1250,
    gold: 850,
    wins: 55,
    losses: 45,
    elo: 0,
  },
  {
    id: 5,
    username: 'Player 5',
    score: 1200,
    gold: 800,
    wins: 52,
    losses: 48,
    elo: 0,
  },
  {
    id: 6,
    username: 'Player 6',
    score: 1150,
    gold: 750,
    wins: 50,
    losses: 50,
    elo: 0,
  },
  {
    id: 7,
    username: 'Player 7',
    score: 1100,
    gold: 700,
    wins: 48,
    losses: 52,
    elo: 0,
  },
  {
    id: 8,
    username: 'Player 8',
    score: 1050,
    gold: 650,
    wins: 45,
    losses: 55,
    elo: 0,
  },
  {
    id: 9,
    username: 'Player 9',
    score: 1000,
    gold: 600,
    wins: 42,
    losses: 58,
    elo: 0,
  },
  {
    id: 10,
    username: 'Player 10',
    score: 950,
    gold: 550,
    wins: 40,
    losses: 60,
    elo: 0,
  },
  {
    id: 11,
    username: 'Player 11',
    score: 900,
    gold: 500,
    wins: 38,
    losses: 62,
    elo: 0,
  },
  {
    id: 12,
    username: 'Player 12',
    score: 850,
    gold: 450,
    wins: 35,
    losses: 65,
    elo: 0,
  },
  {
    id: 13,
    username: 'Player 13',
    score: 800,
    gold: 400,
    wins: 33,
    losses: 67,
    elo: 0,
  },
  {
    id: 14,
    username: 'Player 14',
    score: 750,
    gold: 350,
    wins: 30,
    losses: 70,
    elo: 0,
  },
  {
    id: 15,
    username: 'Player 15',
    score: 700,
    gold: 300,
    wins: 28,
    losses: 72,
    elo: 0,
  },
  {
    id: 16,
    username: 'Player 16',
    score: 650,
    gold: 250,
    wins: 25,
    losses: 75,
    elo: 0,
  },
  {
    id: 17,
    username: 'Player 17',
    score: 600,
    gold: 200,
    wins: 22,
    losses: 78,
    elo: 0,
  },
  {
    id: 18,
    username: 'Player 18',
    score: 550,
    gold: 150,
    wins: 20,
    losses: 80,
    elo: 0,
  },
  {
    id: 19,
    username: 'Player 19',
    score: 500,
    gold: 100,
    wins: 18,
    losses: 82,
    elo: 0,
  },
  {
    id: 20,
    username: 'Player 20',
    score: 450,
    gold: 50,
    wins: 15,
    losses: 85,
    elo: 0,
  },
  {
    id: 21,
    username: 'Player 21',
    score: 400,
    gold: 0,
    wins: 12,
    losses: 88,
    elo: 0,
  },
  {
    id: 22,
    username: 'Player 22',
    score: 350,
    gold: -50,
    wins: 10,
    losses: 90,
    elo: 0,
  },
  {
    id: 23,
    username: 'Player 23',
    score: 300,
    gold: -100,
    wins: 8,
    losses: 92,
    elo: 0,
  },
];

dummyData.forEach((player) => {
  player.elo = calculateElo(player.wins, player.losses);
});
