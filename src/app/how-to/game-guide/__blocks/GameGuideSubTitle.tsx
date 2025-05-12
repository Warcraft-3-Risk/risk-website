import React from 'react';
import content from '@/app/data/content.json';

const gameGuideContent = content.gameguide;

const GameGuideSubTitle: React.FC = () => {
  return (
    <section className="game-guide-section flex flex-col items-start space-y-6">
      <h2 className="game-guide-title text-4xl font-bold">
        {gameGuideContent['gameguide.howtoplay']}
      </h2>
      <div className="game-guide-text space-y-4">
        <p className="game-guide-description">
          {gameGuideContent['gameguide.intro']}
        </p>
      </div>
      <div className="game-guide-following space-y-4">
        <p>{gameGuideContent['gameguide.followup']}</p>
      </div>
    </section>
  );
};

export default GameGuideSubTitle;
