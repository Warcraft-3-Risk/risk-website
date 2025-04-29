export interface LeaderboardEntry {
  id: number;
  username: string;
  score: number;
  gold: number;
  elo: number;
  wins: number;
  losses: number;
}

export const dummyData: LeaderboardEntry[] = [
  {
    id: 1,
    username: 'Player 1',
    score: 1500,
    gold: 1200,
    elo: 1800,
    wins: 75,
    losses: 25,
  },
  {
    id: 2,
    username: 'Player 2',
    score: 1400,
    gold: 1100,
    elo: 1234,
    wins: 68,
    losses: 32,
  },
  {
    id: 3,
    username: 'Player 3',
    score: 1300,
    gold: 900,
    elo: 1600,
    wins: 60,
    losses: 40,
  },
  {
    id: 4,
    username: 'Player 4',
    score: 1250,
    gold: 850,
    elo: 1550,
    wins: 55,
    losses: 45,
  },
  {
    id: 5,
    username: 'Player 5',
    score: 1200,
    gold: 800,
    elo: 1500,
    wins: 52,
    losses: 48,
  },
  {
    id: 6,
    username: 'Player 6',
    score: 1150,
    gold: 750,
    elo: 1450,
    wins: 50,
    losses: 50,
  },
  {
    id: 7,
    username: 'Player 7',
    score: 1100,
    gold: 700,
    elo: 1400,
    wins: 48,
    losses: 52,
  },
  {
    id: 8,
    username: 'Player 8',
    score: 1050,
    gold: 650,
    elo: 1350,
    wins: 45,
    losses: 55,
  },
  {
    id: 9,
    username: 'Player 9',
    score: 1000,
    gold: 600,
    elo: 1300,
    wins: 42,
    losses: 58,
  },
  {
    id: 10,
    username: 'Player 10',
    score: 950,
    gold: 550,
    elo: 1250,
    wins: 40,
    losses: 60,
  },
  {
    id: 11,
    username: 'Player 11',
    score: 900,
    gold: 500,
    elo: 1200,
    wins: 38,
    losses: 62,
  },
  {
    id: 12,
    username: 'Player 12',
    score: 850,
    gold: 450,
    elo: 1150,
    wins: 35,
    losses: 65,
  },
];
