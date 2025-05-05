import Image from 'next/image';
import React from 'react';

const StandAloneSubTitle: React.FC = () => {
  return (
    <section className="standalone-section flex flex-col items-start space-y-6">
      <h2 className="standalone-title text-4xl font-bold">
        The evolution of classic rts begins now
      </h2>
      <div className="standalone-text space-y-4">
        <p className="standalone-description">
          Risk Reforged is a game about conquering cities and ports across
          Europe. Win conditions vary depending on what game mode has been
          chosen, but what is common among all modes is that you have to capture
          60% of all cities
        </p>
      </div>
      <div className="standalone-following space-y-4">
        <p>
          The following sections will help you familiarise yourself with the
          basic concepts and help you get on your way to dominate Europe in no
          time!
        </p>
        {/* Icons section */}
      </div>
      <div className="standalone-icons w-full flex items-center flex-row md:flex-row md:items-center justify-around">
        <div className="icon-item flex items-center space-x-2">
          <Image
            src="#"
            alt="Icon 1"
            className="w-8 h-8"
            width={32}
            height={32}
          />
          <span>Icon 1</span>
        </div>
        <div className="icon-item flex items-center space-x-2">
          <Image
            src="#"
            alt="Icon 2"
            className="w-8 h-8"
            width={32}
            height={32}
          />
          <span>Icon 2</span>
        </div>
        <div className="icon-item flex items-center space-x-2">
          <Image
            src="#"
            width={32}
            height={32}
            alt="Icon 3"
            className="w-8 h-8"
          />
          <span>Icon 3</span>
        </div>
      </div>
    </section>
  );
};

export default StandAloneSubTitle;
