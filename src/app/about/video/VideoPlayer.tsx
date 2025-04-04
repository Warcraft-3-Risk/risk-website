import React from 'react';

interface VideoPlayerProps {
  src: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  controls = true,
  autoplay = false,
  loop = false,
}) => {
  return (
    <video width="100%" controls={controls} autoPlay={autoplay} loop={loop}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
