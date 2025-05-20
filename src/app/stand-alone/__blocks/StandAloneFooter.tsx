'use client';

import Image from 'next/image';
import { useInView } from '@/core/hooks/useInView';
import content from '@/app/data/content.json';

const StandAloneFooter = () => {
  const footer = content.standaloneFooter;
  const { ref, isVisible } = useInView<HTMLDivElement>(0.8);

  return (
    <footer className="stand-alone-footer">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out justify-center flex flex-col items-center text-center 
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <h2 className="stand-alone-footer-title">{footer.title}</h2>
        <div className="stand-alone-footer-following">
          <p>{footer.description}</p>
        </div>
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
              alt={footer.icons.patreonAlt}
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
              alt={footer.icons.kickstarterAlt}
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
              alt={footer.icons.discordAlt}
              className="discord-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default StandAloneFooter;
