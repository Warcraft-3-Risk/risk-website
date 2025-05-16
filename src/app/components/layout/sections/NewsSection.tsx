'use client';

import CTAButton from '@/app/components/ui/CTAButtons';
import content from '@/app/data/content.json';
import Image from 'next/image';
import '@/core/SCSS/base/sections/s-news-and-events-section.scss';
import '@/core/SCSS/base/layout/l-article-items.scss';

interface Article {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string[];
  text: string;
  imageUrl?: string;
}

interface NewsSectionProps {
  articles: Article[];
}

export default function NewsSection({ articles }: NewsSectionProps) {
  const latestArticle = articles.length > 0 ? articles[0] : null;
  const newsSection = content.newssection;
  if (!articles || articles.length === 0) {
    return (
      <section className="NewsSection py-12 px-6">
        <div className="container mx-auto">
          <p className="text-gray-600">{newsSection['newssection.none']}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="NewsSection relative py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-start flex-col md:flex-row items-center mb-8">
          <h2 className="naetitle text-4xl z-50 font-bold mb-4 md:mb-0">
            {newsSection['newssection.title']}
          </h2>
        </div>

        {latestArticle && (
          <div className="newsbox relative bg-[#1b3449] text-white overflow-hidden mb-8 shadow-lg">
            <div className="sandborder flex flex-col md:flex-row border-8">
              <div className="p-6 flex-1 relative">
                <h2 className="title text-2xl font-bold mb-1">
                  {latestArticle.title}
                </h2>
                <div className="flex flex-row items-center mb-4">
                  <p className="flavortextyellow text-xs uppercase mr-4">
                    {latestArticle.tags.join(', ')}
                  </p>
                  <p className="flavortext text-xs font-medium">
                    {new Date(latestArticle.publishedAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="maintext mb-6">
                  {latestArticle.text.length > 300
                    ? latestArticle.text.slice(0, 300) + '...'
                    : latestArticle.text}
                </p>
              </div>

              {latestArticle.imageUrl && (
                <div className="relative h-[200px] md:h-auto w-full md:w-4/12">
                  <Image
                    src={latestArticle.imageUrl}
                    alt="News image"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-end mt-4">
          <CTAButton
            href="/news-and-events"
            className="bg-[#0C2A46] text-[#efe5c7] px-4 py-2 font-medium hover:bg-opacity-90 transition-colors"
            variant={'readmore'}
          >
            {newsSection['newssection.viewmore']}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
