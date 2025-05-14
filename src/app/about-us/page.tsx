import React from 'react';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/page/aboutus-page/p-about-us-page.scss';
import Image from 'next/image';

const AboutUs = content.aboutus;

const AboutPage = () => {
  return (
    <div className="maincontainer">
      <div className="about-text">
        <h2 className="">{AboutUs['subtitle']}</h2>
        <h1 className="text-3xl mb-12">{AboutUs['title']}</h1>
        <div className="about-description-text">
          <p className="about-description mb-12">{AboutUs['description']}</p>

          <p className="about-description-welcome">{AboutUs['welcome']}</p>
        </div>
      </div>
      <div className="world">
        <Image
          width={1000}
          height={1000}
          src={'/images/World.svg'}
          alt={''}
        ></Image>
      </div>
    </div>
  );
};

export default AboutPage;
