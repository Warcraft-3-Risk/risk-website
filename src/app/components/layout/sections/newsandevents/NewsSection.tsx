import LoadingSpinner from '@/app/components/ui/LoadingSpinner';

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
  loading: boolean;
}

export default function NewsSection({ articles, loading }: NewsSectionProps) {
  const latestArticle = articles[0];

  return (
    <section className="bg-[#F7ECD9] py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h2 className="text-4xl font-bold text-[#0C2A46] mb-4 md:mb-0">
            NEWS
          </h2>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : latestArticle ? (
          <div className="mb-8">
            <p className="text-gray-700 mb-6">{latestArticle.text}</p>
            <div className="flex justify-end">
              <a
                href="news-and-events/articles"
                className="bg-[#0C2A46] text-white px-4 py-2 font-medium hover:bg-opacity-90 transition-colors"
              >
                View more
              </a>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No news available at the moment.</p>
        )}
      </div>
    </section>
  );
}
