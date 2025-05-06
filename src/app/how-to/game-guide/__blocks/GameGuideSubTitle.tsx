import React from 'react';
import content from '@/app/data/content.json';

const GameGuideSubTitle: React.FC = () => {
  return (
    <section className="game-guide-section flex flex-col items-start space-y-6">
      <h2 className="game-guide-title text-4xl font-bold">
        {content.gameguide['gameguide.howtoplay']}
      </h2>
      <div className="game-guide-text space-y-4">
        <p className="game-guide-description">
          {content.gameguide['gameguide.intro']}
        </p>
      </div>
      <div className="game-guide-following space-y-4">
        <p>{content.gameguide['gameguide.followup']}</p>
      </div>
    </section>
  );
};

export default GameGuideSubTitle;
