import React from 'react';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/page/aboutus-page/p-about-us-page.scss';
import Image from 'next/image';
import CommunitySection from '@/app/components/layout/sections/CommunitySection';

const AboutUs = content.aboutus;

const AboutPage = () => {
  return (
    <div className="maincontainer">
      <div className="about-text">
        <h2>{AboutUs['subtitle']}</h2>
        <h1 className="about-us-title mb-12">{AboutUs['title']}</h1>

        <div className="about-description-text">
          <p className="about-description mb-12">{AboutUs['description']}</p>
          <p className="about-description-welcome">{AboutUs['welcome']}</p>
        </div>
      </div>

      <div className="about-what-we-do">
        <p className="summary-text mb-8">{AboutUs['summary']}</p>

        <h2 className="section-heading">{AboutUs['whatwedotitle']}</h2>
        <ul className="what-we-do-list">
          <li className="what-we-do-item">
            <h3 className="what-we-do-title">
              {AboutUs['competitivePlayTitle']}
            </h3>
            <p className="what-we-do-description">
              {AboutUs['competitivePlayDescription']}
            </p>
          </li>
          <li className="what-we-do-item">
            <h3 className="what-we-do-title">
              {AboutUs['casualTournamentsTitle']}
            </h3>
            <p className="what-we-do-description">
              {AboutUs['casualTournamentsDescription']}
            </p>
          </li>
          <li className="what-we-do-item">
            <h3 className="what-we-do-title">{AboutUs['liveStreamsTitle']}</h3>
            <p className="what-we-do-description">
              {AboutUs['liveStreamsDescription']}
            </p>
          </li>
          <li className="what-we-do-item">
            <h3 className="what-we-do-title">{AboutUs['communityTitle']}</h3>
            <p className="what-we-do-description">
              {AboutUs['communityDescription']}
            </p>
          </li>
          <li className="what-we-do-item">
            <h3 className="what-we-do-title">{AboutUs['openSourceTitle']}</h3>
            <p className="what-we-do-description">
              {AboutUs['openSourceDescription']}
            </p>
          </li>
        </ul>
      </div>

      <div className="about-closing-statement">
        <p className="closing-text">{AboutUs['closingStatement']}</p>
      </div>
      <div className="world">
        <Image
          width={1000}
          height={1000}
          src={'/images/World.svg'}
          alt="World Map"
        />
      </div>

      <div className="about-us-following">
        <CommunitySection />
      </div>
    </div>
  );
};

export default AboutPage;
