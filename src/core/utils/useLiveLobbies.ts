'use client';

import { useEffect, useState } from 'react';

interface GameLobby {
  name: string;
  server: string;
  map: string;
  host: string;
  slotsTaken: number;
  slotsTotal: number;
  checksum: number;
  created: number;
  lastUpdated: number;
  id: string;
}

interface ApiResponse {
  status: string;
  code: number;
  queryTime: number;
  body: GameLobby[];
}

export function useLiveLobbies() {
  const [lobbies, setLobbies] = useState<GameLobby[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLobbies = async () => {
      try {
        const response = await fetch('https://api.wc3stats.com/gamelist');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        
        if (data.status === 'OK' && data.body) {
          // Filter for Risk Europe maps
          const riskLobbies = data.body.filter(
            (lobby) =>
              lobby.map.toLowerCase().includes('risk') &&
              lobby.map.toLowerCase().includes('europe')
          );
          setLobbies(riskLobbies);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching lobbies:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    // Fetch immediately
    fetchLobbies();

    // Refresh every 30 seconds
    const interval = setInterval(fetchLobbies, 30000);

    return () => clearInterval(interval);
  }, []);

  return { lobbies, loading, error };
}
