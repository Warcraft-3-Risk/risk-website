import Image from 'next/image';
import React from 'react';
import content from '@/app/data/content.json';

const SubTitle = content.standalone;

const StandAloneSubTitle: React.FC = () => {
  return (
    <section className="standalone-section">
      <h2 className="standalone-title">
        {SubTitle['standalone.subtitleHeader']}
      </h2>
      <div className="standalone-text">
        <p className="standalone-description">
          {SubTitle['standalone.description']}
        </p>
      </div>
      <div className="standalone-following">
        <p>{SubTitle['standalone.following']}</p>
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
              alt={SubTitle['standalone.icons.patreonAlt']}
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
              src="/images/kickstarter-gul.svg"
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
