'use client';

import { useState } from 'react';
import PatchReleaseNotes from '@/app/patch-notes/__blocks/PatchReleaseNotes';
import PatchNotesHeader from '@/app/patch-notes/__blocks/PatchNotesHeader';
import CommunitySection from '@/app/components/layout/sections/CommunitySection';

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="background min-h-screen">
      <PatchNotesHeader />
      <div className="background mx-auto px-4">
        <PatchReleaseNotes
          isExpanded={isExpanded}
          onToggleExpanded={handleToggleExpanded}
        />
        <div className="communitybackground">
          <CommunitySection />
        </div>
      </div>
    </div>
  );
}
