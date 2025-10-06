import FrontHeader from '@/app/front/__blocks/FrontHeader';
import '@/app/front/styles/front-page.scss';
import W3CSection from './__blocks/W3CSection';
import StandAloneSection from './__blocks/StandAloneSection';
import NewsSection from '@/app/components/layout/sections/NewsSection';
import LeaderBoardSection from '@/app/components/layout/sections/LeaderBoardSection';
import CommunitySection from '@/app/components/layout/sections/CommunitySection';
import articlesData from '@/app/data/articles.json';

export default function FrontPage() {
  // Sort articles by date and get the latest ones
  const sortedArticles = [...articlesData].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="bluebackground">
      <FrontHeader />
      <W3CSection />
      <StandAloneSection />
      <NewsSection articles={sortedArticles} />
      <LeaderBoardSection />
      <CommunitySection />
    </div>
  );
}
