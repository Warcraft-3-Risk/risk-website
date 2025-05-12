import CommunitySection from '@/app/components/layout/sections/CommunitySection';
import Segment from '@/app/components/layout/sections/segment/Segment';
import GameGuideFooter from '@/app/how-to/game-guide/__blocks/GameGuideFooter';
import GameGuideHeader from '@/app/how-to/game-guide/__blocks/GameGuideHeader';
import GameGuideSubTitle from '@/app/how-to/game-guide/__blocks/GameGuideSubTitle';

import '@/core/SCSS/base/layout/page/p-game-guide-page.scss';

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
    title: 'CAPTURING YOUR FIRST COUNTRY',
    description:
      'In order to win, you have to capture countries! Countries consists of cities and ports, and they have to be captured for you to increase your influence. Look for a country in which you own one of its cities or ports. Train 4 riflemen and capture it! Once captured, the country is yours!',
    imageUrl: '/images/testimage.jpg',
  },
  {
    title: 'YOUR FIRST PAYCHECK',
    description:
      'To gain income you need to control a whole country at the end of a turn. You can see the timer both the timer (Clock icon) and the turn counter (Hourglass icon) to the right of your gold. You will always have a base income of 4 gold each turn, but you can increase this by capturing more countries!',
    imageUrl: '/images/testimage.jpg',
  },
  {
    title: 'EXPANDING FOR BEGINNERS',
    description:
      'It is best to start with smaller countries to gain income quickly. Start with 2 or 3 city/port countries. Try to expand in a way that will keep your countries connected.',
    imageUrl: '/images/testimage.jpg',
  },
  {
    title: 'FREE SPAWNS',
    description:
      'Every country that you own will give you free riflemen at the start of a new turn. These will be created at campfires and may be rallied. Each country will only spawn a limited number of units at any given point in time, so make sure to use prioritize them first during combat.',
    imageUrl: '/images/testimage.jpg',
  },
  {
    title: 'DIPLOMACTY IS KING!',
    description:
      'Chat is essential in Risk, make sure to use it and read it. Diplomacy is key. Make sure to peace other players, but also be ready to be backstabbed when you are vulnerable.',
    imageUrl: '/images/testimage.jpg',
  },
];

export default function GameGuide() {
  return (
    <div className="bluebackground min-h-screen">
      <GameGuideHeader />
      <GameGuideSubTitle />
      {segments.map((segment, index) => (
        <Segment key={index} index={index} {...segment} />
      ))}
      <GameGuideFooter />
      <CommunitySection />
    </div>
  );
}
