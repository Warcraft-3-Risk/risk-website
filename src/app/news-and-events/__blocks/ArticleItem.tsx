import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string;
  text: string;
}
// Decides word length of card excerpt
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
                className={`h-6 w-6 transform transition-transform duration-300 text-black ${
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

          <div className="text-gray-100 transition-all duration-300 ease-in-out w-[500px]">
            {expanded ? text : excerpt}
          </div>
        </div>

        <div className="absolute right-[-4rem] top-0 h-full w-1/3 bg-[#F7ECD9] transform -skew-x-12 origin-right" />
      </div>
    </li>
  );
};

export default ArticleItem;
