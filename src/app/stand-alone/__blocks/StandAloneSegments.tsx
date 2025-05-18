import React from 'react';
import Image from 'next/image';
import content from '@/app/data/content.json';

import '@/core/SCSS/base/layout/page/p-stand-alone-page.scss';

const StandAloneSegments: React.FC = () => {
  const segment = content.standaloneSegments;

  return (
    <section className="stand-alone-list-segment">
      <div>
        <h2 className="stand-alone-list-segment-title">{segment.title}</h2>
        <div className="stand-alone-list-segment-item">
          <ul>
            <li className="stand-alone-list-segment-text">{segment.intro}</li>
            <li className="stand-alone-list-segment-text">{segment.point1}</li>
            <li className="stand-alone-list-segment-text">{segment.point2}</li>
            <li className="stand-alone-list-segment-text">{segment.point3}</li>
            <li className="stand-alone-list-segment-text">{segment.point4}</li>
            <li className="stand-alone-list-segment-text">{segment.point5}</li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="relative w-full h-64 md:h-full overflow-hidden">
          <Image
            src="/images/StandAlone_1.webp"
            alt={segment.imageAlt}
            fill
            className="object-cover z-0 w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-l from-transparent to-[#1b3449]" />
        </div>
      </div>
    </section>
  );
};

export default StandAloneSegments;
