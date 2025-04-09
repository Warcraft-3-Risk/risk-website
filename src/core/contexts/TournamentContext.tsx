import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
}

interface TournamentContextProps {
  tournaments: Tournament[];
  addTournament: (tournament: Tournament) => void;
  removeTournament: (id: string) => void;
}

const TournamentContext = createContext<TournamentContextProps | undefined>(
  undefined,
);

export const TournamentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  const addTournament = (tournament: Tournament) => {
    setTournaments((prev) => [...prev, tournament]);
  };

  const removeTournament = (id: string) => {
    setTournaments((prev) => prev.filter((tournament) => tournament.id !== id));
  };

  return (
    <TournamentContext.Provider
      value={{ tournaments, addTournament, removeTournament }}
    >
      {children}
    </TournamentContext.Provider>
  );
};

export const useTournamentContext = (): TournamentContextProps => {
  const context = useContext(TournamentContext);
  if (!context) {
    throw new Error(
      'useTournamentContext must be used within a TournamentProvider',
    );
  }
  return context;
};
