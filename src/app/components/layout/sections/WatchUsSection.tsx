import React from 'react';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';
import { useInView } from '@/core/hooks/useInView';

const watchusContent = content.watchus;
const WatchUsSection: React.FC = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="WatchUs_Block py-12 px-4 md:py-16 md:px-12">
      <div
        ref={ref}
        className={`container mx-auto text-left transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="watch-us-title text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:justify-start flex">
          {watchusContent['watchus.title']}
        </h2>
        <p className="watch-us-description text-base sm:text-lg mb-6 md:justify-start flex">
          {watchusContent['watchus.description']}
        </p>
      </div>
    </section>
  );
};

export default WatchUsSection;
