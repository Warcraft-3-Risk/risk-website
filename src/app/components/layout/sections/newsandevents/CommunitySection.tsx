import React from 'react';
import Image from 'next/image';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/sections/s-community-section.scss';

const CommunitySection: React.FC = () => {
  return (
    <section className="bgblue py-12">
      <div className="container mx-auto px-4">
        <h2 className="communitytitle text-3xl font-bold text-center text-yellow-500 mb-6">
          {content.communitysection['communitysection.title']}
        </h2>
        <p className="communitytext text-center text-white mb-8">
          {content.communitysection['communitysection.subtitle']}
        </p>

        <div className="flex justify-center gap-28">
          <a
            href="https://discord.com/invite/your-server"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/images/Discord.svg"
              alt={content.communitysection['communitysection.discordAlt']}
              width={66}
              height={66}
            />
          </a>
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/images/YouTube_Symbol_gule.webp"
              alt={content.communitysection['communitysection.youtubeAlt']}
              width={66}
              height={66}
            />
          </a>
          <a
            href="https://twitch.tv/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/images/twitch-icon_gule.webp"
              alt={content.communitysection['communitysection.twitchAlt']}
              width={66}
              height={66}
              className="cta-icons"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
