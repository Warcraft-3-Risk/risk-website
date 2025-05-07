import '@/core/SCSS/base/layout/page/p-stand-alone-page.scss';
import Image from 'next/image';
import React from 'react';

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
          {video && videoUrl ? (
            <video
              src={videoUrl}
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
