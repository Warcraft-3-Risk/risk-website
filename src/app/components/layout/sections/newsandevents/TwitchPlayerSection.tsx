import React, { useState } from 'react';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';
import Image from 'next/image';

const TwitchPlayerSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const channels = ['babusox', 'babusox', 'babusox'];
  const parentDomain = 'risk-reforged.web.app';

  const prevSlide = () => {
    setIsPlaying(false);
    setCurrent((prev) => (prev === 0 ? channels.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsPlaying(false);
    setCurrent((prev) => (prev === channels.length - 1 ? 0 : prev + 1));
  };

  const channel = channels[current];

  return (
    <section className="Section_Background">
      <div className="relative mt-8 flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="button-prev"
          aria-label="Previous"
        >
          <span className="arrow-left" aria-hidden="true">
            ‹
          </span>
        </button>

        <div className="carousel-container w-full max-w-4xl aspect-video relative bg-black">
          {isPlaying ? (
            <iframe
              src={`https://player.twitch.tv/?channel=${channel}&parent=${parentDomain}&autoplay=true`}
              className="w-full h-full"
              allowFullScreen
            />
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className="w-full h-full cursor-pointer relative"
            >
              <Image
                width={640}
                height={360}
                src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${channel}-640x360.jpg`}
                alt={`${channel} Twitch Preview`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-semibold">
                ▶ Watch Live
              </div>
            </div>
          )}
        </div>

        <button onClick={nextSlide} className="button-next" aria-label="Next">
          ›
        </button>
      </div>
    </section>
  );
};

export default TwitchPlayerSection;
