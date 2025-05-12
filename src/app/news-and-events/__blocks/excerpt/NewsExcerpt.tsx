import React from 'react';
import content from '@/app/data/content.json';
interface NewsExcerptProps {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}
const NewsAndEvents = content.newsandevents;

const NewsExcerpt: React.FC<NewsExcerptProps> = ({
  title,
  date,
  excerpt,
  link,
}) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2 text-gray-700">{excerpt}</p>
      <a
        href={link}
        className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
      >
        {NewsAndEvents['newsandevents.readmore']}
      </a>
    </div>
  );
};

export default NewsExcerpt;
