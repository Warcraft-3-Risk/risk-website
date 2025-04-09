'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

interface Article {
  id: number;
  title: string;
  tags: string;
  author: string;
  text: string;
}

interface NewsContextProps {
  articles: Article[];
  loading: boolean;
  refreshArticles: () => void;
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/articles');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Failed to load articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <NewsContext.Provider
      value={{ articles, loading, refreshArticles: fetchArticles }}
    >
      {children}
    </NewsContext.Provider>
  );
};

// Optional helper hook
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};
