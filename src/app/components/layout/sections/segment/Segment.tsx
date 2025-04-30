import React from 'react';
import Image from 'next/image';

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
      className={`segmentbg text-white px-6 py-10 flex flex-col md:flex-row ${
        !isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div
        className={`md:w-1/2 space-y-4 flex flex-col justify-center z-20 relative ${
          isEven ? 'text-left md:items-start' : 'text-right md:items-end'
        }`}
      >
        <h2 className="segmenttitle text-2xl font-bold">{title}</h2>
        <p className="segmenttext text-sm">{description}</p>
        {note && <p className="segmenttext text-sm">{note}</p>}
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center relative">
        <div className="relative w-full max-w-xl aspect-video rounded-lg shadow-lg overflow-hidden">
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
