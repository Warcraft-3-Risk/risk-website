import React from 'react';

import '@/core/SCSS/base/layout/page/p-stand-alone-page.scss';
import Image from 'next/image';

const StandAloneSegments: React.FC = () => {
  return (
    <section className="stand-alone-list-segment">
      <div>
        <h2 className="stand-alone-list-segment-title">Not convinced yet?</h2>
        <div className="stand-alone-list-segment-item">
          <ul>
            <li className="stand-alone-list-segment-text">
              Let’s break it down. Stand Alone is made for players who crave:
            </li>
            <li className="stand-alone-list-segment-text">
              Big multiplayer battles – Up to 24 players in a single match.
              Alliances form and shatter in real time.
            </li>
            <li className="stand-alone-list-segment-text">
              Strategic depth without micromanagement – Focus on what matters:
              gold, territory, trust, and timing.
            </li>
            <li className="stand-alone-list-segment-text">
              Epic free-for-alls on a handcrafted European map filled with
              iconic cities and chokepoints.
            </li>
            <li className="stand-alone-list-segment-text">
              Dynamic diplomacy – Backstab or be backstabbed. Nothing is
              permanent but your ambition.
            </li>
            <li className="stand-alone-list-segment-text">
              A game with roots in the past and vision for the future – Designed
              by fans of the original WarCraft III Risk, refined for today’s
              gamers.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="relative w-full h-64 md:h-full overflow-hidden">
          <Image
            src="/images/testimage.jpg"
            alt="Segment visual"
            fill
            className="object-cover z-0 w-full h-full"
          />

          <div
            className={`absolute inset-0 w-full h-full z-10 bg-gradient-to-l from-transparent to-[#1b3449] `}
          />
        </div>
      </div>
    </section>
  );
};

export default StandAloneSegments;
