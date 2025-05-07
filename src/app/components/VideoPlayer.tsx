import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/core/api/firebase';

interface VideoPlayerProps {
  videoName: string;
  width?: number | string;
  height?: number | string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoName,
  width = '100%',
  height = 'auto',
}) => {
  const [videoURL, setVideoURL] = useState<string>('');

  useEffect(() => {
    const fetchVideoURL = async () => {
      try {
        const videoRef = ref(storage, `videos/${videoName}`);
        const url = await getDownloadURL(videoRef);
        setVideoURL(url);
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoURL();
  }, [videoName]);

  if (!videoURL) {
    return <p>Loading video...</p>;
  }

  return (
    <video width={width} height={height} controls preload="metadata">
      <source src={videoURL} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
