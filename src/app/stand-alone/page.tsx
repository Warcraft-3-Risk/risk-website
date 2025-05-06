import CommunitySection from '@/app/components/layout/sections/newsandevents/CommunitySection';
import SegmentReverse from '@/app/components/layout/sections/segment/SegmentReverse';
import StandAloneFooter from '@/app/stand-alone/__blocks/StandAloneFooter';
import StandAloneHeader from '@/app/stand-alone/__blocks/StandAloneHeader';
import StandAloneSegments from '@/app/stand-alone/__blocks/StandAloneSegments';
import StandAloneSubTitle from '@/app/stand-alone/__blocks/StandAloneSubTitle';

import '@/core/SCSS/base/layout/page/p-stand-alone-page.scss';

const segments = [
  {
    title: 'STARTING OUT',
    description:
      'Once the host of the game has chosen a game mode, you will be assigned random cities and ports across European countries. Look at the minimap to quickly get an idea of what cities you own. Your cities are indicated by white dots.',
    note: '*For Capitals game mode you will have to pick a city as your starting point, in addition to your randomly assigned cities and ports.',
    imageUrl: '/images/testimage.jpg',
  },
];

export default function StandAlonePage() {
  return (
    <div className="bluebackground min-h-screen">
      <StandAloneHeader />
      <StandAloneSubTitle />
      <StandAloneSegments />
      {segments.map((segment, index) => (
        <SegmentReverse key={index} index={index} {...segment} />
      ))}
      <StandAloneFooter />
      <CommunitySection />
    </div>
  );
}
