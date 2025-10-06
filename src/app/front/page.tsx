import FrontHeader from '@/app/front/__blocks/FrontHeader';
import '@/app/front/styles/front-page.scss';
import W3CSection from './__blocks/W3CSection';
import StandAloneSection from './__blocks/StandAloneSection';

export default function FrontPage() {
  return (
    <div className="bluebackground min-h-screen">
      <FrontHeader />
      <W3CSection />
      <StandAloneSection />
    </div>
  );
}
