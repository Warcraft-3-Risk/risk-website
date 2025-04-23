'use client';

import { useEffect, useState } from 'react';
import { CircleAlert } from 'lucide-react';
import patchNotesData from '@/app/data/patch-notes.json';
import '@/core/SCSS/base/layout/l-patch-notes.scss';

interface PatchNote {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string[];
  text: string;
}

interface PatchNotesBlockProps {
  isExpanded: boolean;
}

const PatchNotesBlock = ({ isExpanded }: PatchNotesBlockProps) => {
  const [patchNotes, setPatchNotes] = useState<PatchNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPatchNotes = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const sortedNotes = [...patchNotesData].sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        );
        setPatchNotes(sortedNotes);
      } catch (error) {
        console.error('Error loading patch notes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPatchNotes();
  }, []);

  const renderPatchText = (text: string) =>
    text.split('\n').map((line, index) => {
      if (line.startsWith('-')) {
        return (
          <p key={index} className="font-bold mt-2">
            {line}
          </p>
        );
      } else if (line.trim() !== '') {
        return (
          <p key={index} className="themed-text ml-4 mb-5">
            {line}
          </p>
        );
      } else {
        return <br key={index} />;
      }
    });

  const visibleNotes = isExpanded ? patchNotes : patchNotes.slice(0, 3);

  return (
    <div className="background min-h-screen w-full flex flex-col items-center">
      {loading ? (
        <p className="text-center text-lg mt-10">Loading patch notes...</p>
      ) : (
        <>
          {visibleNotes.map((patch, index) => {
            const isEven = index % 2 === 0;
            const variantClass = isEven ? 'yellow-theme' : 'sand-theme';

            return (
              <div key={patch.id} className={`p-6 w-3/4 ${variantClass}`}>
                <div className="p-2 themed-border">
                  <div className="spurgt flex items-center gap-10">
                    <CircleAlert className="scale-200 ml-5 themed-icon mt-5" />
                    <h2 className="titletext text-6xl font-bold mt-5">
                      {patch.title}
                    </h2>
                  </div>

                  <span className="themed-text m-3 inline-block text-xs font-medium px-2 py-1 mr-2 rounded">
                    {patch.author} |{' '}
                    {new Date(patch.publishedAt).toDateString()}
                  </span>

                  <div>{renderPatchText(patch.text)}</div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default PatchNotesBlock;
