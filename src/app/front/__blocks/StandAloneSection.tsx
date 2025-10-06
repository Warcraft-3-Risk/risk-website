import React from 'react';
import content from '@/app/data/content.json';
import '@/app/front/styles/stand-alone-section.scss';

const Header = content.standalonesection;
const StandAloneSection: React.FC = () => {
  return (
    <header className="relative bg-cover bg-center bg-[url(/images/stand-alone/background.webp)]">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex items-center flex-col justify-center h-full mx-4">
        <h1 className="stand-alone-section-title">
          {Header['standalone.title']}
        </h1>
        <h2 className="stand-alone-section-description">
          {Header['standalone.subtitle']}
        </h2>
        <p className="stand-alone-section-subtitle">
          {Header['standalone.description']}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent to-[#1b3449]"></div>
    </header>
  );
};

export default StandAloneSection;
