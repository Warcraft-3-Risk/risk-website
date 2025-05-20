import React from 'react';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/sections/s-stand-alone-section.scss';
import CTAButton from '@/app/components/ui/CTAButtons';
import { useInView } from '@/core/hooks/useInView';
const StandAloneContent = content.standalonesection;

const StandAloneSection: React.FC = () => {
  const { ref: titleRef, isVisible: isTitleVisible } =
    useInView<HTMLHeadingElement>(0.2);
  const { ref: subtitleRef, isVisible: isSubtitleVisible } =
    useInView<HTMLParagraphElement>(0.2);
  const { ref: descRef, isVisible: isDescVisible } =
    useInView<HTMLParagraphElement>(0.2);
  const { ref: buttonRef, isVisible: isButtonVisible } =
    useInView<HTMLDivElement>(0.2);

  return (
    <section className="stand-alone-section">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className={`stand-alone-title mt-10 text-center transition-all duration-700 ease-out transform ${
            isTitleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {StandAloneContent['standalone.title']}
        </h2>
        <p
          ref={subtitleRef}
          className={`stand-alone-subtitle text-2xl font-semibold text-center mb-8 transition-all duration-700 ease-out transform ${
            isSubtitleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {StandAloneContent['standalone.subtitle']}
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p
            ref={descRef}
            className={`stand-alone-description mb-8 text-start transition-all duration-700 ease-out transform ${
              isDescVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            {StandAloneContent['standalone.description']}
          </p>
        </div>
        <div
          ref={buttonRef}
          className={`justify-end flex transition-all duration-700 ease-out transform ${
            isButtonVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <CTAButton variant="readmore" href="/stand-alone">
            {StandAloneContent['standalone.button']}
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default StandAloneSection;
