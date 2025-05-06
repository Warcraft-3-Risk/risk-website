import Image from 'next/image';
import React from 'react';

const StandAloneSubTitle: React.FC = () => {
  return (
    <section className="standalone-section">
      <h2 className="standalone-title">
        The evolution of classic rts begins now
      </h2>
      <div className="standalone-text">
        <p className="standalone-description">
          The legacy of one of WarCraft III’s most iconic custom maps is being
          reborn. Bigger. Smarter. Stand-alone. <br /> <br />
          Welcome to Stand Alone, a simplified, yet fiercely competitive
          real-time strategy (RTS) game inspired by the legendary Risk map from
          WarCraft III — and built from the ground up as a dedicated multiplayer
          experience. Set during the turbulent age of the <br />
          Napoleonic Wars, this is a battlefield where tactics, trust, and
          timing mean everything.
        </p>
      </div>
      <div className="standalone-following">
        <p>
          Support us now on Kickstarter and help bring Stand Alone to life — a
          new home for the RTS community, forged in strategy and fire.
        </p>
        {/* Icons section */}
      </div>
      <div className="standalone-icons">
        <div className="icon-item">
          <a
            href="https://www.patreon.com/posts/107482929?pr=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/patreon-gul.webp"
              alt="Icon 1"
              className="patreon-icon"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="icon-item">
          <a
            href="https://www.patreon.com/posts/kickstarter-113889244"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/kickstarter-gul.webp"
              alt="Icon 2"
              className="kickstarter-icon"
              width={256}
              height={256}
            />
          </a>
        </div>
        <div className="icon-item">
          <a
            href="https://discord.gg/wc3risk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/Discord.svg"
              width={32}
              height={32}
              alt="Icon 3"
              className="discord-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StandAloneSubTitle;
