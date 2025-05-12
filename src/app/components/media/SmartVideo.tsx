'use client';

import { useEffect, useState, forwardRef } from 'react';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { storage } from '@/core/api/firebase';

export interface SmartVideoProps {
  path: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  onEnded?: () => void;
  poster?: string;
  preload?: 'auto' | 'metadata' | 'none';
}

const SmartVideo = forwardRef<HTMLVideoElement, SmartVideoProps>(
  (
    {
      path,
      autoPlay = true,
      muted = true,
      loop = false,
      controls = false,
      className = '',
      onEnded,
      poster,
      preload = 'auto',
    },
    ref,
  ) => {
    const [videoURL, setVideoURL] = useState('');

    useEffect(() => {
      const fetchVideo = async () => {
        try {
          const videoFileRef = storageRef(storage, path);
          const url = await getDownloadURL(videoFileRef);
          setVideoURL(url);
        } catch (error) {
          console.error('Failed to load video:', error);
        }
      };

      fetchVideo();
    }, [path]);

    return videoURL ? (
      <video
        ref={ref}
        src={videoURL}
        className={className}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        preload={preload}
        onEnded={onEnded}
        poster={poster}
      />
    ) : (
      <div className="flex justify-center items-center h-full bg-black/70 text-white">
        Loading video...
      </div>
    );
  },
);

SmartVideo.displayName = 'SmartVideo';

export default SmartVideo;
