import React, { useState } from 'react';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-newsandevents.scss';

const TwitchPlayerSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const channels = ['babusox', 'babusox', 'babusox'];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? channels.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrent((prev) => (prev === channels.length - 1 ? 0 : prev + 1));
  };

  // TODO: Carousel slider functionality
  return (
    <section className="Section_Background">
      <div className="relative mt-8 flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="button-prev"
          aria-label="Previous"
        >
          <span className="arrow-left" aria-hidden="true">‹</span>
        </button>

        <div className="carousel-container">
          <div className="background-embed active">
            <iframe
              src={`https://player.twitch.tv/?channel=${channels[current]}&parent=localhost&autoplay=false`}
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>
          </div>

          <div className="foreground-embed" style={{ transform: `translateX(-${current * 100}%)` }}>
          {channels.map((channel, index) => (
            <div key={index} className="w-full h-full flex justify-center items-center">
              <iframe
                src={`https://player.twitch.tv/?channel=${channel}&parent=localhost&autoplay=false`}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="button-next"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default TwitchPlayerSection;