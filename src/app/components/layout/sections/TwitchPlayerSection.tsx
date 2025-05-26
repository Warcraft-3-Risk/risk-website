import content from '@/app/data/content.json';
import { useInView } from '@/core/hooks/useInView';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';
import Image from 'next/image';
import React, { useState } from 'react';

const TwitchPlayerSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const { ref: titleRef, isVisible: isTitleVisible } =
    useInView<HTMLHeadingElement>(0.2);
  const { ref: taglineRef, isVisible: isTaglineVisible } =
    useInView<HTMLDivElement>(0.2);

  const { ref: playerRef, isVisible: isPlayerVisible } =
    useInView<HTMLDivElement>(0.2);
  // Define the channels and parent domain for Twitch embeds, the channels can literally be anyone.
  const channels = ['babusox', 'babusox', 'babusox'];
  const parentDomain = 'risk-reforged.web.app';
  const SpecialMentionsContent = content.specialmentions;
  const watchusContent = content.watchus;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? channels.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === channels.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="TwitchPlayer_Section">
      <h2
        ref={titleRef}
        className={`titletext text-center transition-all duration-700 ease-out transform ${
          isTitleVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        {SpecialMentionsContent['specialmentions.title']}
      </h2>

      <div
        ref={taglineRef}
        className={`watch-us-tagline text-xl sm:text-2xl gap-4 sm:gap-6 transition-all duration-700 ease-out transform ${
          isTaglineVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        <p>{watchusContent['watchus.liveTagline']}</p>
      </div>

      <div className="flex gap-6 sm:gap-8 justify-center mt-7 sm:mt-6">
        <Image
          src="/images/YouTube_Symbol_gule.webp"
          alt="YouTube"
          width={100}
          height={80}
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <Image
          src="/images/twitch-icon_gule.webp"
          alt="Twitch"
          width={80}
          height={80}
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div
        ref={playerRef}
        className={`relative mt-8 flex justify-center items-center pb-52 duration-700 ease-out
          ${isPlayerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <button
          onClick={prevSlide}
          className="button-prev"
          aria-label="Previous"
        >
          <span className="arrow-left" aria-hidden="true">
            ‹
          </span>
        </button>

        <div className="carousel-container">
          <div className="background-embed active">
            <iframe
              src={`https://player.twitch.tv/?channel=${channels[current]}&parent=${parentDomain}&autoplay=false`}
              width="100%"
              height="100%"
              allowFullScreen
            />
          </div>

          <div
            className="foreground-embed"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {channels.map((channel, index) => (
              <div
                key={index}
                className="w-full h-full flex justify-center items-center"
              >
                <iframe
                  src={`https://player.twitch.tv/?channel=${channel}&parent=${parentDomain}&autoplay=false`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className="button-next" aria-label="Next">
          ›
        </button>
      </div>
    </section>
  );
};

export default TwitchPlayerSection;
