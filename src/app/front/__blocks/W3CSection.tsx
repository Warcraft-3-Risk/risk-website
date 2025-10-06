import React from 'react';
import content from '@/app/data/content.json';
import '@/app/front/styles/w3c-section.scss';

const Header = content.w3c;
const W3CSection: React.FC = () => {
  return (
    <header className="relative bg-cover bg-center bg-[url(/images/logos/medium-logotype.png)] min-h-[60vh]">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex items-center flex-col justify-center h-full py-16">
        <h1 className="w3c-section-title">
          {Header['w3c.header']}
        </h1>
        <h2 className="w3c-section-subtitle">
          {Header['w3c.subheader']}
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent to-[#1b3449]"></div>
    </header>
  );
};

export default W3CSection;
