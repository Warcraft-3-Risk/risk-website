'use client';

import { useState } from 'react';
import PatchNotesButtons from '@/app/patch-notes/__blocks/PatchNotesButtons';
import PatchReleaseNotes from '@/app/patch-notes/__blocks/PatchReleaseNotes';
import PatchNotesHeader from '@/app/patch-notes/__blocks/PatchNotesHeader';

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="background min-h-screen">
      <PatchNotesHeader />

      <div className="background mx-auto px-4">
        <PatchReleaseNotes isExpanded={isExpanded} />
        <PatchNotesButtons
          isExpanded={isExpanded}
          onToggleExpanded={() => setIsExpanded((prev) => !prev)}
        />
      </div>
    </div>
  );
}
