'use client';

import '@/core/SCSS/base/layout/page/p-stand-alone-page.scss';
import Image from 'next/image';
import { storage } from '@/core/api/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';

type SegmentProps = {
  index: number;
  title: string;
  description: string;
  note?: string;
  imageUrl?: string;
  video?: boolean;
  videoUrl?: string;
};

const StandaloneSegment: React.FC<SegmentProps> = ({
  index,
  title,
  description,
  note,
  imageUrl,
  video,
  videoUrl,
}) => {
  const isEven = index % 2 !== 0;
  const [firebaseVideoUrl, setFirebaseVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      if (video && videoUrl) {
        try {
          const videoRef = ref(storage, videoUrl);
          const url = await getDownloadURL(videoRef);
          setFirebaseVideoUrl(url);
        } catch (error) {
          console.error('Error loading video from Firebase Storage:', error);
        }
      }
    };
    fetchVideoUrl();
  }, [video, videoUrl]);
  return (
    <div className={`segment-container ${!isEven ? 'reverse' : ''}`}>
      <div
        className={`segment-content ${isEven ? 'align-right' : 'align-left'}`}
      >
        <h2 className="segment-title">{title}</h2>
        <p className="segment-description">{description}</p>
        {note && <p className="segment-note">{note}</p>}
      </div>

      <div className="segment-media-wrapper">
        <div className="segment-media">
          {video && firebaseVideoUrl ? (
            <video
              src={firebaseVideoUrl}
              className="segment-video"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : imageUrl ? (
            <Image
              src={imageUrl}
              alt="Segment visual"
              fill
              className="segment-image"
            />
          ) : null}

          <div className={`segment-gradient ${isEven ? 'left' : 'right'}`} />
        </div>
      </div>
    </div>
  );
};

export default StandaloneSegment;
