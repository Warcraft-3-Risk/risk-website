import content from '@/app/data/content.json';
import Image from 'next/image';
import React from 'react';

const NewsAndEvents = content.newsandevents;
const NewsAndEventsHeader: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center mb-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/news-and-events/News_hero_img.webp"
          alt="News and Events Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={75}
        />
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent to-[#1b3449]" />
      </div>

      <h1 className="titletext z-1">{NewsAndEvents['newsandevents.title']}</h1>
    </div>
  );
};

export default NewsAndEventsHeader;
