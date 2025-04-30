import GameGuideHeader from './__blocks/GameGuideHeader';
import GameGuideSubTitle from './__blocks/GameGuideSubTitle';
import Segment from '@/app/components/layout/sections/segment/Segment';

import '@/core/SCSS/base/layout/l-game-guide-page.scss';

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
    imageUrl: '/images/testimage.jpg',
  },
  {
    title: 'CAPTURING CITIES AND PORTS',
    description:
      'Cities and ports are the most important part of the game. They are the only way to increase your influence, and they are also the only way to train units. Make sure to capture as many cities and ports as possible!',
    imageUrl: '/images/testimage.jpg',
  },
  {
    title: 'CAPTURING COUNTRIES',
    description:
      'Countries are the most important part of the game. They are the only way to increase your influence, and they are also the only way to train units. Make sure to capture as many countries as possible!',
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
    </div>
  );
}
