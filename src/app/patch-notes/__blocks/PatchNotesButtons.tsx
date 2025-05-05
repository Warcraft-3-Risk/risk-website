'use client';

import CTAButton from '@/app/components/ui/CTAButtons';
import { useRouter } from 'next/navigation';
import content from '@/app/data/content.json';

interface PatchNotesButtonsProps {
  onToggleExpanded: () => void;
  isExpanded: boolean;
}

const PatchNotesButtons = ({
  onToggleExpanded,
  isExpanded,
}: PatchNotesButtonsProps) => {
  const router = useRouter();

  return (
    <div className="ctabuttons flex gap-4 justify-end w-full mt-10">
      <CTAButton
        variant="play"
        onClick={() =>
          router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }
      >
        {content.patchnotes['patchreleasenotes.button.play']}
      </CTAButton>
      <CTAButton variant="readmore" onClick={onToggleExpanded}>
        {isExpanded ? 'SHOW LESS' : 'READ MORE'}
      </CTAButton>
    </div>
  );
};

export default PatchNotesButtons;
