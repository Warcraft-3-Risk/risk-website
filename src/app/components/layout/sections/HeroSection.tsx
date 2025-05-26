'use client';

import CTAButton from '@/app/components/ui/CTAButtons';
import '@/core/SCSS/base/sections/s-hero-section.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
// This component renders a hero section with a YouTube video that autoplays when in view.
export default function HeroSection() {
  const [isInView, setIsInView] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasAutoplayed, setHasAutoplayed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // This useEffect hook sets up an IntersectionObserver to detect when the HeroSection is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoplayed) {
          setShowVideo(true);
          setHasAutoplayed(true);
        }
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    const section = document.querySelector('.HeroSection');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasAutoplayed]);

  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const action = isMuted ? 'unMute' : 'mute';
    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: action,
        args: [],
      }),
      '*',
    );

    setIsMuted(!isMuted);
  };

  const togglePlayPause = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const action = isPaused ? 'playVideo' : 'pauseVideo';
    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: action,
        args: [],
      }),
      '*',
    );

    setIsPaused(!isPaused);
  };

  const getYouTubeSrc = () => {
    return `https://www.youtube.com/embed/mZabLiyguSU?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&showinfo=0&controls=0`;
  };

  return (
    <section className="HeroSection relative w-full min-h-[400px]">
      <div className="herobg relative w-full aspect-video">
        {isInView && showVideo ? (
          <>
            <iframe
              ref={iframeRef}
              className="absolute top-0 left-0 w-full h-full z-0"
              src={getYouTubeSrc()}
              title="RiskReforged Commercial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="absolute bottom-4 left-4 z-10 flex gap-4">
              <CTAButton variant="readmore" onClick={toggleMute}>
                {isMuted ? 'Unmute' : 'Mute'}
              </CTAButton>
              <CTAButton variant="readmore" onClick={togglePlayPause}>
                {isPaused ? 'Play' : 'Pause'}
              </CTAButton>
            </div>
          </>
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
      </div>
    </section>
  );
}
