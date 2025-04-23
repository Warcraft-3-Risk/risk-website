'use client';

import { Button } from '@/app/components/ui/shadcn/button';
import { useRouter } from 'next/navigation';
import '@/core/SCSS/base/layout/l-patch-notes-buttons.scss';

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
    <div className="flex gap-4 mt-10 justify-end">
      <Button
        className="PlayNowButton"
        variant="PlayNowButton"
        onClick={() => router.push('https://yourgameurl.com')}
      >
        PLAY NOW
      </Button>
      <Button
        className="ReadMoreButton"
        variant="ReadMoreButton"
        onClick={onToggleExpanded}
      >
        {isExpanded ? 'SHOW LESS' : 'READ MORE'}
      </Button>
    </div>
  );
};

export default PatchNotesButtons;
