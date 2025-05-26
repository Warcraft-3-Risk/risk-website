'use client';

import CTAButton from '@/app/components/ui/CTAButtons';
import content from '@/app/data/content.json';
import Link from 'next/link';

interface PatchNotesButtonsProps {
  onToggleExpanded: () => void;
  isExpanded: boolean;
}

const PatchNotesButtons = ({
  onToggleExpanded,
  isExpanded,
}: PatchNotesButtonsProps) => {
  const patchNotesContent = content.patchnotes;
  return (
    <div className="ctabuttons flex gap-4 justify-end w-full mt-10">
      <Link
        href="https://github.com/Warcraft-3-Risk/wc3-risk-system/releases/download/2.84/Risk.Europe.2.84.w3x"
        target="_blank"
      >
        <CTAButton variant="play">
          {patchNotesContent['patchreleasenotes.button.play']}
        </CTAButton>
      </Link>
      <CTAButton variant="readmore" onClick={onToggleExpanded}>
        {isExpanded ? 'SHOW LESS' : 'READ MORE'}
      </CTAButton>
    </div>
  );
};

export default PatchNotesButtons;
