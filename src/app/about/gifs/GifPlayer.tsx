import React, { useState } from 'react';
import Image from 'next/image';

interface GifPlayerProps {
  gifSrc: string;
  mp4Src?: string; // Optional MP4 source for performance optimization
  alt?: string;
  width?: number;
  height?: number;
}

const GifPlayer: React.FC<GifPlayerProps> = ({
  gifSrc,
  mp4Src,
  alt = 'GIF',
  width = 500,
  height = 300,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {mp4Src ? (
        <video
          width="100%"
          loop
          autoPlay={isPlaying}
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
        >
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : (
        <Image src={gifSrc} alt={alt} width={width} height={height} priority />
      )}
    </div>
  );
};

export default GifPlayer;
