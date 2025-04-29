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
}

const ArticleItemMobile = ({ title, text, tags, publishedAt }: Article) => {
  const [expanded, setExpanded] = useState(false);
  const excerpt = text.length > 150 ? text.substring(0, 150) + '...' : text;

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <li className="newsbox-mobile bg-[#1b3449] text-white mb-8 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src="/images/testimage2.jpg"
          alt="Article image"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <button
          onClick={toggleExpanded}
          className="absolute bottom-2 right-2 z-10 bg-black bg-opacity-50 rounded-full p-1"
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
        <h2 className="text-lg font-bold mb-1">{title}</h2>
        <div className="text-xs text-gray-300 mb-2">
          <span className="uppercase mr-2">{tags}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
        <p className="text-sm leading-snug">{expanded ? text : excerpt}</p>
      </div>
    </li>
  );
};

export default ArticleItemMobile;
