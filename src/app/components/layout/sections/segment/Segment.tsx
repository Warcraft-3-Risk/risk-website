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

const Segment: React.FC<SegmentProps> = ({
  index,
  title,
  description,
  note,
  imageUrl,
  video,
  videoUrl,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`segmentbg text-white flex flex-col md:flex-row ${
        !isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div
        className={`w-full md:w-1/2 space-y-4 flex flex-col justify-center z-20 relative px-5 py-6 text-center md:text-left ${
          isEven ? 'md:items-start' : 'md:items-end'
        }`}
      >
        <h2 className="segmenttitle text-4xl md:text-5xl font-bold">{title}</h2>
        <p className="segmenttext">{description}</p>
        {note && <p className="segmenttext text-md">{note}</p>}
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="relative w-full h-64 md:h-full shadow-lg overflow-hidden">
          {video && videoUrl ? (
            <video
              src={videoUrl}
              className="absolute inset-0 w-full h-full object-cover z-0"
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
              className="object-cover z-0"
            />
          ) : null}

          <div
            className={`absolute inset-0 w-full h-full z-10 ${
              isEven
                ? 'bg-gradient-to-l from-transparent to-[#1b3449]'
                : 'bg-gradient-to-r from-transparent to-[#1b3449]'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Segment;
