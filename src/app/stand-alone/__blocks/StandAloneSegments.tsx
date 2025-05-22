'use client';
import content from '@/app/data/content.json';
import { useInView } from '@/core/hooks/useInView';
import Image from 'next/image';
import React from 'react';

import '@/core/SCSS/base/layout/page/p-stand-alone-page.scss';

const StandAloneSegments: React.FC = () => {
  const segment = content.standaloneSegments;

  const { ref, isVisible } = useInView<HTMLUListElement>(0.2);

  const points = [
    segment.intro,
    segment.point1,
    segment.point2,
    segment.point3,
    segment.point4,
    segment.point5,
  ];

  return (
    <section className="stand-alone-list-segment flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <h2 className="stand-alone-list-segment-title mb-6">{segment.title}</h2>
        <div className="stand-alone-list-segment-item">
          <ul ref={ref}>
            {points.map((point, index) => (
              <li
                key={index}
                className={`stand-alone-list-segment-text mb-4 transition-all duration-700 ease-out transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="relative w-full h-64 md:h-full overflow-hidden">
          <Image
            src="/images/stand-alone/StandAlone_1.webp"
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
