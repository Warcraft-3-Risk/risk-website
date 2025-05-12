'use client';

import { useState, useEffect } from 'react';
import articlesData from '@/app/data/articles.json';

import HeroSection from '@/app/components/layout/sections/HeroSection';
import LeaderBoardSection from '@/app/components/layout/sections/LeaderBoardSection';
import NewsSection from '@/app/components/layout/sections/NewsSection';
import CommunitySection from '@/app/components/layout/sections/CommunitySection';
import WatchUsSection from '@/app/components/layout/sections/WatchUsSection';
import SpecialMentionsSection from '@/app/components/layout/sections/SpecialMentionsSection';

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

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setArticles(articlesData);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <LeaderBoardSection />
      <NewsSection articles={articles} />
      <CommunitySection />
      <WatchUsSection />
      <SpecialMentionsSection />
    </div>
  );
}
