import React from 'react';
import Image from 'next/image';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/sections/s-community-section.scss';

const communityContent = content.communitysection;

const CommunitySection: React.FC = () => {
  return (
    <section className="bgblue py-12">
      <div className="container mx-auto px-4">
        <h2 className="communitytitle text-3xl font-bold text-center text-yellow-500 mb-6">
          {communityContent['communitysection.title']}
        </h2>
        <p className="communitytext text-center text-white mb-8">
          {communityContent['communitysection.subtitle']}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          <a
            href="https://discord.gg/wc3risk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/images/Discord.svg"
              alt={communityContent['communitysection.discordAlt']}
              width={66}
              height={66}
            />
          </a>
          <a
            href="https://www.youtube.com/@riskreforged"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/images/YouTube_Symbol_gule.webp"
              alt={communityContent['communitysection.youtubeAlt']}
              width={66}
              height={66}
            />
          </a>
          <a
            href="https://www.twitch.tv/riskreforged"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/images/twitch-icon_gule.webp"
              alt={communityContent['communitysection.twitchAlt']}
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
