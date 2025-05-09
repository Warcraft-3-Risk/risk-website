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

const ArticleItemMobile = ({
  title,
  text,
  tags,
  publishedAt,
  imageUrl,
}: Article) => {
  const [expanded, setExpanded] = useState(false);
  const excerpt = text.length > 150 ? text.substring(0, 150) + '...' : text;

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <li className="newsbox relative text-white overflow-hidden mb-8 rounded-lg md:hidden">
      <div className="sandborder flex flex-col border-8">
        <div className="relative h-48 w-full">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Article image"
              fill
              sizes="100vw"
              className="object-cover rounded-t-lg"
            />
          )}
          <button
            onClick={toggleExpanded}
            className="expand-btn absolute bottom-2 right-2 z-10 bg-black bg-opacity-50 rounded-full p-1"
            aria-label="Toggle article"
          >
            <ChevronDown
              className={`h-6 w-6 text-white transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        <div className="p-4">
          <h2 className="title text-lg font-bold mb-1">{title}</h2>
          <div className="flex flex-row items-center mb-2">
            <p className="flavortextyellow text-xs uppercase mr-2">{tags}</p>
            <p className="flavortext text-xs font-medium">
              {new Date(publishedAt).toLocaleDateString()}
            </p>
          </div>
          <p className="maintext text-sm leading-snug">
            {expanded ? text : excerpt}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ArticleItemMobile;
