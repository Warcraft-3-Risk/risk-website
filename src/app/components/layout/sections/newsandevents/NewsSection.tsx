import CTAButton from '@/app/components/ui/CTAButtons';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/sections/s-news-and-events-section.scss';

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
    <section className="NewsSection py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-end flex-col md:flex-row items-center mb-8">
          <h2 className="naetitle text-4xl font-bold mb-4 md:mb-0">
            {content.newssection['newssection.title']}
          </h2>
        </div>

        {latestArticle ? (
          <div className="mb-8">
            <p className="latestarticle mb-6">{latestArticle.text}</p>
            <div className="flex justify-end">
              <CTAButton
                href="/news-and-events"
                className="bg-[#0C2A46] text-[#efe5c7] px-4 py-2 font-medium hover:bg-opacity-90 transition-colors"
                variant={'readmore'}
              >
                {content.newssection['newssection.viewmore']}
              </CTAButton>
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
