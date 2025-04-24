import content from '@/app/data/content.json';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string[];
  text: string;
}

interface NewsSectionProps {
  articles: Article[];
}

export default function NewsSection({ articles }: NewsSectionProps) {
  const latestArticle = articles[0];

  return (
    <section className="bg-[#efe5c7] py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-end flex-col md:flex-row items-end mb-8">
          <h2 className="text-4xl font-bold text-[#0C2A46] mb-4 md:mb-0">
            {content.newssection['newssection.title']}
          </h2>
        </div>

        {latestArticle ? (
          <div className="mb-8">
            <p className="text-gray-700 mb-6">{latestArticle.text}</p>
            <div className="flex justify-end">
              <Link
                href="news-and-events"
                className="bg-[#0C2A46] text-[#efe5c7] px-4 py-2 font-medium hover:bg-opacity-90 transition-colors"
              >
                {content.newssection['newssection.viewmore']}
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">
            {content.newssection['newssection.none']}
          </p>
        )}
      </div>
    </section>
  );
}
