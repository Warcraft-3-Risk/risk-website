import SegmentReverse from '@/app/components/layout/sections/segment/SegmentReverse';
import StandAloneFooter from '@/app/stand-alone/__blocks/StandAloneFooter';
import StandAloneHeader from '@/app/stand-alone/__blocks/StandAloneHeader';
import StandAloneSegments from '@/app/stand-alone/__blocks/StandAloneSegments';
import StandAloneSubTitle from '@/app/stand-alone/__blocks/StandAloneSubTitle';

import '@/core/SCSS/base/layout/page/p-stand-alone-page.scss';

const segments = [
  {
    title: '16-24 Players. One Massive European Map. No Safe Zone.',
    description:
      'Conquer historic cities, dominate key terrain, and lead your nation to glory. Every match feels like a grand campaign, with the simplicity to jump in and the depth to keep you mastering it for years.',
    imageUrl: '/images/testimage.jpg',
  },
  {
    title: 'Gold is King. Diplomacy is Queen. Victory is Earned.',
    description:
      'Command troops, manage your economy, and outmaneuver your rivals on a map that never plays the same way twice. Will you wage war, buy peace, or play both sides?',
    imageUrl: '/images/testimage.jpg',
  },
  {
    title: 'Built for the Community. Inspired by a Classic.',
    description:
      'This isn’t just another RTS — it’s a love letter to the golden age of custom maps and strategy gaming. Stand Alone is for the players who remember the thrill of staying up till 3AM in a 12-player standoff, waiting for someone to flinch. Now we’re building a standalone version of that magic — with no limitations.',
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
    </div>
  );
}
