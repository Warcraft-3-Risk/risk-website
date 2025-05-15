'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import '@/core/SCSS/base/layout/l-article-items.scss';

interface Article {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string;
  text: string;
  imageUrl: string;
}

const ArticleItem = ({ title, text, tags, publishedAt, imageUrl }: Article) => {
  const [expanded, setExpanded] = useState(false);
  const excerpt = text.length > 250 ? text.substring(0, 250) + '...' : text;

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('.expand-btn')) return;
    toggleExpanded();
  };

  return (
    <li className="newsbox relative bg-[#1b3449] text-white overflow-hidden mb-16 shadow-lg">
      <div
        className="sandborder flex flex-col-reverse md:flex-row border-8 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="p-6 flex-1 z-1 relative">
          <div className="flex items-center justify-between">
            <h2 className="title text-2xl font-bold mb-1">{title}</h2>
          </div>
          <div className="flex flex-row items-center mb-5">
            <p className="flavortextyellow text-xs uppercase mr-4">{tags}</p>
            <p className="flavortext text-xs font-medium">
              {new Date(publishedAt).toLocaleDateString()}
            </p>
          </div>

          <div className="maintext transition-all duration-300 ease-in-out max-w-[800px] overflow-hidden">
            {expanded ? text : excerpt}
          </div>
        </div>
        {imageUrl && (
          <div className="triangle relative h-[200px] md:h-auto w-full md:w-4/12">
            <Image
              src={imageUrl}
              alt="Description of image"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-none object-cover"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpanded();
              }}
              className="expand-btn absolute bottom-4 right-4 z-10"
              aria-label="Toggle article"
            >
              <ChevronDown
                className={`h-8 w-8 transition-transform duration-300 ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ArticleItem;
