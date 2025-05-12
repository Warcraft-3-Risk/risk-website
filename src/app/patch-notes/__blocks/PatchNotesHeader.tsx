import content from '@/app/data/content.json';
import Image from 'next/image';

const patchNotesContent = content.patchnotes;

export default function PatchNotesHeader() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center mb-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/patch_notes_hero.webp"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={75}
        />

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#1b3449]" />
      </div>

      <h1 className="patch-notes-header-title z-10 relative text-center">
        {patchNotesContent['patchreleasenotes.title']}
      </h1>
    </div>
  );
}
