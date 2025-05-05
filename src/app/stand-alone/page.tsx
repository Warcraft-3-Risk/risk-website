import CommunitySection from '@/app/components/layout/sections/newsandevents/CommunitySection';
import Segment from '@/app/components/layout/sections/segment/Segment';
import StandAloneFooter from '@/app/stand-alone/__blocks/StandAloneFooter';
import StandAloneHeader from '@/app/stand-alone/__blocks/StandAloneHeader';
import StandAloneSubTitle from '@/app/stand-alone/__blocks/StandAloneSubTitle';

const segments = [
  {
    title: 'STARTING OUT',
    description:
      'Once the host of the game has chosen a game mode, you will be assigned random cities and ports across European countries. Look at the minimap to quickly get an idea of what cities you own. Your cities are indicated by white dots.',
    note: '*For Capitals game mode you will have to pick a city as your starting point, in addition to your randomly assigned cities and ports.',
    imageUrl: '/images/testimage.jpg',
  },
  {
    title: 'CAPTURING YOUR FIRST COUNTRY',
    description:
      'In order to win, you have to capture countries! Countries consist of cities and ports, and they have to be captured for you to increase your influence. Look for a country in which you own one of its cities or ports. Train 4 riflemen and capture it! Once captured, the country is yours!',
    video: true,
    videoUrl: '/videos/tacc.mp4',
  },
  {
    title: 'YOUR FIRST PAYCHECK',
    description:
      'To gain income you need to control a whole country at the end of a turn. You can see the timer both the timer (Clock icon) and the turn counter (Hourglass icon) to the right of your gold. You will always have a base income of 4 gold each turn, but you can increase this by capturing more countries!',
    imageUrl: '/images/testimage.jpg',
  },
];

export default function StandAlonePage() {
  return (
    <div className="bluebackground min-h-screen">
      <StandAloneHeader />
      <StandAloneSubTitle />
      <div className="game-guide-segments flex flex-col items-center justify-center mt-12 md:mt-24">
        {segments.map((segment, index) => (
          <Segment key={index} index={index} {...segment} />
        ))}
      </div>
      <StandAloneFooter />
      <CommunitySection />
    </div>
  );
}
