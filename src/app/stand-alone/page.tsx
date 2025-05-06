import CommunitySection from '@/app/components/layout/sections/newsandevents/CommunitySection';
import StandAloneFooter from '@/app/stand-alone/__blocks/StandAloneFooter';
import StandAloneHeader from '@/app/stand-alone/__blocks/StandAloneHeader';
import StandAloneSegments from '@/app/stand-alone/__blocks/StandAloneSegments';
import StandAloneSubTitle from '@/app/stand-alone/__blocks/StandAloneSubTitle';

import '@/core/SCSS/base/layout/page/p-stand-alone-page.scss';
export default function StandAlonePage() {
  return (
    <div className="bluebackground min-h-screen">
      <StandAloneHeader />
      <StandAloneSubTitle />
      <StandAloneSegments />
      <StandAloneFooter />
      <CommunitySection />
    </div>
  );
}
