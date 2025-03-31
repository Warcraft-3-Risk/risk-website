//TODO: Make this usable in the leaderboard page
import { createContext, useContext, useState, ReactNode } from 'react';

interface LeaderBoardContextProps {
  filter: string;
  setFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
}

const LeaderBoardContext = createContext<LeaderBoardContextProps | undefined>(
  undefined,
);

export const LeaderBoardProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState('highest');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <LeaderBoardContext.Provider
      value={{
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </LeaderBoardContext.Provider>
  );
};

export const useLeaderBoard = () => {
  const context = useContext(LeaderBoardContext);
  if (!context) {
    throw new Error('useLeaderBoard must be used within a LeaderBoardProvider');
  }
  return context;
};
