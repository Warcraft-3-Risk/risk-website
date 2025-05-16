import React, { useState } from 'react';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';
import content from '@/app/data/content.json';
import Image from 'next/image';

const TwitchPlayerSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const channels = ['babusox', 'babusox', 'babusox'];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? channels.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === channels.length - 1 ? 0 : prev + 1));
  };
  const parentDomain = 'risk-reforged.web.app';
  const SpecialMentionsContent = content.specialmentions;
  const watchusContent = content.watchus;

  return (
    <section className="background">
      <h2 className="titletext text-center">
        {SpecialMentionsContent['specialmentions.title']}
      </h2>
      <div className="watch-us-tagline text-xl sm:text-2xl gap-4 sm:gap-6">
        <p>{watchusContent['watchus.liveTagline']}</p>
      </div>
      <div className="flex gap-6 sm:gap-8 justify-center mt-7 sm:mt-6">
          <Image
            src="/images/YouTube_Symbol_gule.webp"
            alt="YouTube"
            width={64}
            height={64}
            className="w-12 sm:w-[76px] h-auto"
          />
          <Image
            src="/images/twitch-gule.webp"
            alt="Twitch"
            width={64}
            height={64}
            className="w-12 sm:w-[76px] h-auto"
          />
        </div>
      <div className="relative mt-8 flex justify-center items-center pb-52">
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
            ></iframe>
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
                ></iframe>
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
