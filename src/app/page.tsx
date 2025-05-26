'use client';

import articlesData from '@/app/data/articles.json';
import { useEffect, useState } from 'react';

import CommunitySection from '@/app/components/layout/sections/CommunitySection';
import HeroSection from '@/app/components/layout/sections/HeroSection';
import LeaderBoardSection from '@/app/components/layout/sections/LeaderBoardSection';
import NewsSection from '@/app/components/layout/sections/NewsSection';
import SpecialMentionsSection from '@/app/components/layout/sections/SpecialMentionsSection';
import StandAloneSection from '@/app/components/layout/sections/StandAloneSection';
import WatchUsSection from '@/app/components/layout/sections/WatchUsSection';

// Define the Article interface to match the structure of articles.json
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
      <WatchUsSection />
      <SpecialMentionsSection />
      <CommunitySection />
      <StandAloneSection />
    </div>
  );
}
