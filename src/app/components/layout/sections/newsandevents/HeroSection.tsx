'use client';

import { useEffect, useRef, useState } from 'react';
import CTAButton from '@/app/components/ui/CTAButtons';
import '@/core/SCSS/base/sections/s-hero-section.scss';

import SmartVideo from '@/app/components/media/SmartVideo';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    const section = document.querySelector('.HeroSection');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    setHasEnded(false);
  };

  return (
    <section className="HeroSection relative w-full min-h-[400px]">
      <div className="herobg relative w-full">
        {isInView && (
          <SmartVideo
            ref={videoRef}
            path="video/RiskReforged_commercial.mp4"
            autoPlay
            muted={isMuted}
            loop={false}
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
            preload="metadata"
            onEnded={() => setHasEnded(true)}
            controls={false}
            poster="/images/hero-poster.jpg"
          />
        )}

        <CTAButton
          variant="play"
          onClick={toggleMute}
          className="absolute z-10 bottom-4 right-4"
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </CTAButton>

        {hasEnded && (
          <CTAButton
            variant="readmore"
            onClick={handleReplay}
            className="absolute z-10 bottom-4 left-4"
          >
            Replay
          </CTAButton>
        )}
      </div>
    </section>
  );
}
