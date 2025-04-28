export interface LeaderboardEntry {
  id: number;
  username: string;
  score: number;
  winRate: string;
  gold: number;
  elo: number;
}

export const dummyData: LeaderboardEntry[] = [
  {
    id: 1,
    username: 'Player 1',
    score: 1500,
    winRate: '75%',
    gold: 1200,
    elo: 1800,
  },
  {
    id: 2,
    username: 'Player 2',
    score: 1400,
    winRate: '68%',
    gold: 1100,
    elo: 1234,
  },
  {
    id: 3,
    username: 'Player 3',
    score: 1300,
    winRate: '60%',
    gold: 900,
    elo: 1600,
  },
  {
    id: 4,
    username: 'Player 4',
    score: 1250,
    winRate: '55%',
    gold: 850,
    elo: 1550,
  },
  {
    id: 5,
    username: 'Player 5',
    score: 1200,
    winRate: '52%',
    gold: 800,
    elo: 1500,
  },
  {
    id: 6,
    username: 'Player 6',
    score: 1150,
    winRate: '50%',
    gold: 750,
    elo: 1450,
  },
  {
    id: 7,
    username: 'Player 7',
    score: 1100,
    winRate: '48%',
    gold: 700,
    elo: 1400,
  },
  {
    id: 8,
    username: 'Player 8',
    score: 1050,
    winRate: '45%',
    gold: 650,
    elo: 1350,
  },
  {
    id: 9,
    username: 'Player 9',
    score: 1000,
    winRate: '42%',
    gold: 600,
    elo: 1300,
  },
  {
    id: 10,
    username: 'Player 10',
    score: 950,
    winRate: '40%',
    gold: 550,
    elo: 1250,
  },
  {
    id: 11,
    username: 'Player 11',
    score: 900,
    winRate: '38%',
    gold: 500,
    elo: 1200,
  },
  {
    id: 12,
    username: 'Player 12',
    score: 850,
    winRate: '35%',
    gold: 450,
    elo: 1150,
  },
];
