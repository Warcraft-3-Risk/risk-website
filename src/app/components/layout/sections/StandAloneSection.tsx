import React from 'react';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-stand-alone-section.scss';

const StandAloneContent = content.standalonesection;
const StandAloneSection: React.FC = () => {
  return (
    <section className="stand-alone-section">
      <div className="container mx-auto px-4">
        <h2 className="stand-alone-title mt-10 text-center">
          {StandAloneContent['standalone.title']}
        </h2>
        <p className="stand-alone-subtitle text-2xl font-semibold text-center mb-8">
          {StandAloneContent['standalone.subtitle']}
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="stand-alone-description mb-8 text-start">
            {StandAloneContent['standalone.description']}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StandAloneSection;
