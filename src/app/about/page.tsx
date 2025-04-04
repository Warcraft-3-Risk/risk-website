'use client';
import React from 'react';
import VideoPlayer from '@/app/about/video/VideoPlayer';
import GifPlayer from '@/app/about/gifs/GifPlayer';

const VideoPage: React.FC = () => {
  return (
    <div>
      <h1>Videos & GIFs</h1>

      <h2>Video Example</h2>
      <VideoPlayer src="/videos/sample.mp4" />

      <h2>GIF Example</h2>
      <GifPlayer gifSrc="/gifs/sample.gif" mp4Src="/gifs/sample.mp4" />
    </div>
  );
};

export default VideoPage;
