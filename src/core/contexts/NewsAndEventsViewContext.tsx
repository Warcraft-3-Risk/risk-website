'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import articlesData from '@/app/data/articles.json';

interface Article {
  id: number;
  title: string;
  publishedAt: string;
  tags: string[];
  author: string;
  text: string;
  imageUrl: string;
}

interface NewsContextProps {
  articles: Article[];
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  // Use the static articles data
  const articles = [...articlesData];

  return (
    <NewsContext.Provider value={{ articles }}>{children}</NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};
