import React, { useState } from 'react';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/layout/l-newsandevents.scss';

const TwitchEmbed: React.FC<{ channel: string }> = ({ channel }) => {
  return (
    <div className="w-[400px] h-[225px] flex-shrink-0">
      <iframe
        src={`https://player.twitch.tv/?channel=${channel}&parent=localhost`}
        height="225"
        width="400"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const TwitchPlayerSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const embeds = [
    <TwitchEmbed key={0} channel="babusox" />,
    <TwitchEmbed key={1} channel="babusox" />,
    <TwitchEmbed key={2} channel="babusox" />,
  ];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? embeds.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === embeds.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="Section_Background">
      <div className="relative mt-8 flex justify-center items-center">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 text-white text-3xl z-10 bg-black bg-opacity-30 px-2 rounded hover:bg-opacity-50 transition"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Carousel Container */}
        <div className="carousel-container">
          {/* Background Embeds */}
          {embeds.map((embed, index) => (
            <div
              key={`bg-${index}`}
              className={`background-embed ${index === current ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - current) * 100}%)`,
              }}
            >
              {embed}
            </div>
          ))}

          {/* Foreground Embed */}
          <div
            className="foreground-embed"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {embeds.map((embed, index) => (
              <div key={index} className="min-w-full flex justify-center">
                {embed}
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 text-white text-3xl z-10 bg-black bg-opacity-30 px-2 rounded hover:bg-opacity-50 transition"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default TwitchPlayerSection;