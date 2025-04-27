import Image from 'next/image';

export default function PatchNotesHeader() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center mb-4 overflow-hidden">
      {/* Image with fade at bottom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimage.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#1b3449]" />
      </div>

      <h1 className="titletext text-[#f9c701] text-8xl font-bold z-10 relative text-center">
        PATCH NOTES
      </h1>
    </div>
  );
}
