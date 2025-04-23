'use client';

import { useState } from 'react';
import PatchNotesBlock from '@/app/patch-notes/__blocks/PatchNotes';
import PatchNotesButtons from '@/app/patch-notes/__blocks/PatchNotesButtons';

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="background min-h-screen">
      <div className="mx-auto px-4">
        <h1 className="titletext text-[#f9c701] text-8xl font-bold mb-4 flex justify-center">
          PATCH NOTES
        </h1>
        <PatchNotesBlock isExpanded={isExpanded} />
        <PatchNotesButtons
          isExpanded={isExpanded}
          onToggleExpanded={() => setIsExpanded((prev) => !prev)}
        />
      </div>
    </div>
  );
}
