'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string;
  text: string;
}

const ArticleItem = ({ title, author, text, tags, publishedAt }: Article) => {
  const [expanded, setExpanded] = useState(false);
  const excerpt = text.length > 100 ? text.substring(0, 100) + '...' : text;

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <li className="relative bg-[#0C2A46] text-white rounded-lg overflow-hidden mb-6 shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="p-6 flex-1 z-10 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-1">{title}</h2>
            <button
              onClick={toggleExpanded}
              className="text-white transition-transform"
              aria-label="Toggle article"
            >
              <ChevronDown
                className={`h-6 w-6 transform transition-transform duration-300 text-white ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          <p className="text-sm text-gray-300 italic mb-2">By {author}</p>
          <p className="text-sm text-gray-300 mb-4 font-medium">
            Published on {new Date(publishedAt).toLocaleDateString()}
          </p>
          <p className="text-xs text-yellow-300 mb-2 uppercase tracking-wide">
            {tags}
          </p>

          <div className="text-gray-100 transition-all duration-300 ease-in-out max-w-[800px] overflow-hidden">
            {expanded ? text : excerpt}
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-5/12 bg-[#F7ECD9] [clip-path:polygon(100%_0,0%_0,100%_100%)]" />
      </div>
    </li>
  );
};

export default ArticleItem;
