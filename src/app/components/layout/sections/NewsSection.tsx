'use client';

import CTAButton from '@/app/components/ui/CTAButtons';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/l-article-items.scss';
import '@/core/SCSS/base/sections/s-news-and-events-section.scss';
import { useInView } from '@/core/hooks/useInView';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string[];
  text: string;
  imageUrl?: string;
}
// This interface defines the structure of an article object used in the NewsSection component.
interface NewsSectionProps {
  articles: Article[];
}
// the NewsSection component displays the latest news articles in a visually appealing format.
export default function NewsSection({ articles }: NewsSectionProps) {
  const latestArticle = articles.length > 0 ? articles[0] : null;
  const newsSection = content.newssection;

  const { ref: titleRef, isVisible: isTitleVisible } =
    useInView<HTMLHeadingElement>();
  const { ref: buttonRef, isVisible: isButtonVisible } =
    useInView<HTMLDivElement>();

  return (
    <section className="NewsSection relative py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-start flex-col md:flex-row items-center mb-8">
          <h2
            ref={titleRef}
            className={`naetitle text-4xl z-45 font-bold mb-4 md:mb-0 transition-all duration-700 ease-out transform ${
              isTitleVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {newsSection['newssection.title']}
          </h2>
        </div>

        {latestArticle ? (
          <div className="newsbox relative bg-[#1b3449] text-white overflow-hidden mb-8 shadow-lg transition-all duration-700 ease-out translate-y-0 opacity-100">
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
        ) : (
          <p className="text-gray-600">{newsSection['newssection.none']}</p>
        )}

        <div
          ref={buttonRef}
          className={`flex justify-end mt-4 transition-all duration-700 ease-out delay-200 transform ${
            isButtonVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
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
