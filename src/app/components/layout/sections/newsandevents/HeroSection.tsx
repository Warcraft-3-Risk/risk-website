'use client';

import { useEffect, useState } from 'react';
import CTAButton from '@/app/components/ui/CTAButtons';
import '@/core/SCSS/base/sections/s-hero-section.scss';
import Image from 'next/image';

export default function HeroSection() {
  const [isInView, setIsInView] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    const section = document.querySelector('.HeroSection');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="HeroSection relative w-full min-h-[400px]">
      <div className="herobg relative w-full aspect-video">
        {isInView && showVideo ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full z-0"
            src="https://www.youtube.com/embed/mZabLiyguSU?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&showinfo=0"
            title="RiskReforged Commercial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            priority
            width={1920}
            height={1080}
            src="/images/youtube_img.webp"
            alt="Hero Poster"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        )}

        {!showVideo && (
          <CTAButton
            variant="play"
            onClick={() => setShowVideo(true)}
            className="absolute z-10 bottom-4 left-4"
          >
            Play Video
          </CTAButton>
        )}
      </div>
    </section>
  );
}
