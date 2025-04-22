import React from 'react';
import Image from 'next/image';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/_vars.scss';

const SpecialMentionsSection: React.FC = () => {
  return (
    <section className="bg-gray-300 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold text-center text-white">
          {content.specialmentions['specialmentions.title']}
        </h2>
        <h4 className="text-2xl font-bold text-center text-white">
          {content.specialmentions['specialmentions.subtitle']}
        </h4>
      </div>
      <div className="flex justify-center space-x-[100px] mt-8 text-white text-center">
        <p>
          <Image
            src="/images/twitch-tile.svg"
            alt="Player 1"
            width={64}
            height={64}
          />
          {content.specialmentions['specialmentions.player1']}
        </p>
        <p>
          <Image
            src="/images/twitch-tile.svg"
            alt="Player 2"
            width={64}
            height={64}
          />
          {content.specialmentions['specialmentions.player2']}
        </p>
        <p>
          <Image
            src="/images/twitch-tile.svg"
            alt="Player 3"
            width={64}
            height={64}
          />
          {content.specialmentions['specialmentions.player3']}
        </p>
      </div>
    </section>
  );
};

export default SpecialMentionsSection;
