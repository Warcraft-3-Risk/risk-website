import React from 'react';
import content from '@/app/data/content.json';

const Header = content.front;
const W3CSection: React.FC = () => {
  return (
    <header className="relative bg-cover bg-center bg-[url(/images/logos/medium-logotype.png)]">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex items-center flex-col justify-center h-full">
        <h1 className="standalone-header-title">
          {Header['front.header']}
        </h1>
        <h2 className="standalone-header-subtitle">
          {Header['front.subheader']}
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent to-[#1b3449]"></div>
    </header>
  );
};

export default W3CSection;
