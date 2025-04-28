import React from 'react';
import Image from 'next/image';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/l-community-section.scss';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          {content.communitysection['communitysection.title']}
        </h2>
        <p className="text-center text-white mb-8">
          {content.communitysection['communitysection.subtitle']}
        </p>

        <div className="flex justify-center gap-8">
          <a
            href="https://discord.com/invite/your-server"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/images/Discord.svg"
              alt={content.communitysection['communitysection.discordAlt']}
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/images/Youtube.webp"
              alt={content.communitysection['communitysection.youtubeAlt']}
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://twitch.tv/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/images/twitch-tile.svg"
              alt={content.communitysection['communitysection.twitchAlt']}
              width={48}
              height={48}
              className="cta-icons"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
