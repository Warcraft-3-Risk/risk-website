import React from 'react';
import content from '@/app/data/content.json';

const Header = content.standalone;
const StandAloneHeader: React.FC = () => {
  return (
    <header className="backgroundimg relative bg-cover bg-center h-64">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="standalone-header-title">
          {Header['standalone.header']}
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent to-[#1b3449]"></div>
    </header>
  );
};

export default StandAloneHeader;
