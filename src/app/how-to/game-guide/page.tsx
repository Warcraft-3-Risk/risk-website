import CommunitySection from '@/app/components/layout/sections/CommunitySection';
import SegmentReverse from '@/app/components/layout/sections/segment/SegmentReverse';
import GameGuideFooter from '@/app/how-to/game-guide/__blocks/GameGuideFooter';
import GameGuideHeader from '@/app/how-to/game-guide/__blocks/GameGuideHeader';
import GameGuideSubTitle from '@/app/how-to/game-guide/__blocks/GameGuideSubTitle';

import '@/core/SCSS/base/layout/page/p-game-guide-page.scss';
import '@/core/SCSS/base/layout/page/p-stand-alone-page.scss';

const segments = [
  {
    title: 'STARTING OUT',
    description:
      'Once the host of the game has chosen a game mode, you will be assigned random cities and ports across European countries. Look at the minimap to quickly get an idea of what cities you own. Your cities are indicated by white dots.',
    note: '*For Capitals game mode you will have to pick a city as your starting point, in addition to your randomly assigned cities and ports.',
    video: true,
    videoUrl: 'video/Step1_720.mp4',
  },
  {
    title: 'CAPTURING YOUR FIRST COUNTRY',
    description:
      'In order to win, you have to capture countries! Countries consist of cities and ports, and they have to be captured for you to increase your influence. Look for a country in which you own one of its cities or ports. Train 4 riflemen and capture it! Once captured, the country is yours!',
    video: true,
    videoUrl: '/video/tacc.mp4',
  },
  {
    title: 'YOUR FIRST PAYCHECK',
    description:
      'To gain income you need to control a whole country at the end of a turn. You can see the timer both the timer (Clock icon) and the turn counter (Hourglass icon) to the right of your gold. You will always have a base income of 4 gold each turn, but you can increase this by capturing more countries!',
    image: true,
    imageUrl: '/images/paycheck.webp',
  },
  {
    title: 'EXPANDING FOR BEGINNERS',
    description:
      'It is best to start with smaller countries to gain income quickly. Start with 2 or 3 city/port countries. Try to expand in a way that will keep your countries connected.',
    video: true,
    videoUrl: '/video/Step3_720.mp4',
  },
  {
    title: 'FREE SPAWNS',
    description:
      'Every country that you own will give you free riflemen at the start of a new turn. These will be created at campfires and may be rallied. Each country will only spawn a limited number of units at any given point in time, so make sure to use prioritize them first during combat.',
    video: true,
    videoUrl: '/video/Step5_720.mp4',
  },
  {
    title: 'DIPLOMACY IS KING!',
    description:
      'Chat is essential in Risk, make sure to use it and read it. Diplomacy is key. Make sure to peace other players, but also be ready to be backstabbed when you are vulnerable.',
    image: false,
    imageUrl: '/images/diplomacy.webp',
  },
  {
    title: 'SHIPS AND TRANSPORTS',
    description:
      'Land based conflicts are cute, but be aware of the dangers from the sea! Combat ships can be built at Ports and can be used to contest other players across the oceans. You may also use transport ships to invade enemy ports. Be aware that you may only load and unload units from pebbled terrain that surround ports',
    video: true,
    videoUrl: '/video/Step5_720.mp4',
  },
  {
    title: 'SWAPPING DEFENDERS',
    description:
      'When your city or port defender is low on health, you can swap them our with a fresh unit. This ensures that your cities are not quickly lost to a sneak attack. On the other hand, you can also use this to increase your momentum, by using healthier units to engage enemies. The choice is yours!',
    video: true,
    videoUrl: '/video/Step6_720.mp4',
  },
  {
    title: 'TREE CUTTING',
    description:
      'Your enemy will take advantage of the terrain to reduce the combat effectiveness of your army. Mortars can effectively blow away that terrain - at least the tree part - allowing you to even the playing field. Mortars can ground target their mortar fire. The trees in the center of the AOE will take most of the damage, as such, consider moving the target area as you cut trees.',
    video: true,
    videoUrl: '/video/Step4_720.mp4',
  },
];

export default function GameGuide() {
  return (
    <div className="bluebackground min-h-screen">
      <GameGuideHeader />
      <GameGuideSubTitle />
      {segments.map((segment, index) => (
        <SegmentReverse key={index} index={index} {...segment} />
      ))}
      <GameGuideFooter />
      <CommunitySection />
    </div>
  );
}
