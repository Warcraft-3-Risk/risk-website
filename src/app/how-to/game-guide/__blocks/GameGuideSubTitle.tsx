import React from 'react';

const GameGuideSubTitle: React.FC = () => {
  return (
    <section className="game-guide-section flex flex-col items-start space-y-6">
      <h2 className="game-guide-title text-4xl font-bold">HOW TO PLAY</h2>
      <div className="game-guide-text space-y-4">
        <p className="game-guide-description">
          Risk Reforged is a game about conquering cities and ports across
          Europe. Win conditions vary depending on what game mode has been
          chosen, but what is common among all modes is that you have to capture
          60% of all cities
        </p>
      </div>
      <div className="game-guide-following space-y-4">
        <p>
          The following sections will help you familiarise yourself with the
          basic concepts and help you get on your way to dominate Europe in no
          time!
        </p>
      </div>
      <div className="game-guide-essential space-y-4">
        <p className="game-guide-essential-text pb-20">
          Chat is essential in Risk, make sure to use it and read it. Diplomacy
          is key. Make sure to peace other players, but also be ready to be
          backstabbed when you are vulnerable.
        </p>
      </div>
    </section>
  );
};

export default GameGuideSubTitle;
