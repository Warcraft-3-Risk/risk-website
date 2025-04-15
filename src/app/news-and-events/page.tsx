'use client';

import { useState, useEffect } from 'react';
import articlesData from '@/app/data/articles.json';
import HeroSection from '@/app/components/layout/sections/newsandevents/HeroSection';
import LeaderBoardSection from '@/app/components/layout/sections/newsandevents/LeaderBoardSection';
import NewsSection from '@/app/components/layout/sections/newsandevents/NewsSection';
import CommunitySection from '@/app/components/layout/sections/newsandevents/CommunitySection';

interface Article {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string[];
  text: string;
}

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setArticles(articlesData);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <LeaderBoardSection loading={loading} />
      <NewsSection loading={loading} articles={articles} />
      <CommunitySection />
    </div>
  );
}
