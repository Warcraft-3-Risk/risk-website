'use client';

import { useEffect, useRef, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/core/api/firebase';
import CTAButton from '@/app/components/ui/CTAButtons';
import '@/core/SCSS/base/sections/s-hero-section.scss';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoURL, setVideoURL] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasEnded, setHasEnded] = useState<boolean>(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const storageRef = ref(storage, 'video/RiskReforged_commercial.mp4');
        const url = await getDownloadURL(storageRef);
        setVideoURL(url);
      } catch (error) {
        console.error('Failed to fetch video:', error);
      }
    };

    fetchVideo();
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const handleVideoEnd = () => {
    setHasEnded(true);
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    setHasEnded(false);
  };

  return (
    <section className="HeroSection relative w-full">
      <div className="herobg relative w-full">
        {videoURL && (
          <video
            ref={videoRef}
            src={videoURL}
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
            autoPlay
            muted={isMuted}
            playsInline
            controls={false}
            loop={false}
            onEnded={handleVideoEnd}
          />
        )}

        <CTAButton
          variant="play"
          onClick={toggleMute}
          className="absolute z-10 bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded"
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </CTAButton>

        {hasEnded && (
          <CTAButton
            variant="readmore"
            onClick={handleReplay}
            className="absolute z-10 bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded"
          >
            Replay
          </CTAButton>
        )}
      </div>
    </section>
  );
}
