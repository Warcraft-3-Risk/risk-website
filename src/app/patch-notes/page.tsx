'use client';

import { useEffect, useState } from 'react';
import patchNotesData from '@/app/data/patch-notes.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/layout/l-patch-notes.scss';
import { CircleAlert } from 'lucide-react';

interface PatchNote {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  tags: string[];
  text: string;
}

const PatchNotesPage = () => {
  const [patchNotes, setPatchNotes] = useState<PatchNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPatchNotes = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setPatchNotes(patchNotesData);
      } catch (error) {
        console.error('Error loading patch notes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPatchNotes();
  }, []);
  const renderPatchText = (text: string) => {
    return text.split('\n').map((line, index) => {
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
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4">
        <h1 className="titletext text-[#f9c701] text-7xl font-bold mb-4 flex justify-center">
          PATCH NOTES
        </h1>

        <div className="background min-h-screen w-full flex flex-col items-center">
          {loading ? (
            <p className="text-center text-lg mt-10">Loading patch notes...</p>
          ) : (
            patchNotes.map((patch, index) => {
              const isEven = index % 2 === 0;
              const variantClass = isEven ? 'yellow-theme' : 'sand-theme';

              return (
                <div key={patch.id} className={`p-6 w-3/4 ${variantClass}`}>
                  <div className="p-2 themed-border">
                    <div className="spurgt flex items-center gap-10">
                      <CircleAlert className="scale-200 ml-5 themed-icon mt-5" />
                      <h2 className="titletext text-5xl font-bold mt-5">
                        {patch.title}
                      </h2>
                    </div>

                    <span className="themed-text m-3 inline-block text-xs font-medium px-2 py-1 mr-2 rounded">
                      {patch.author} | (
                      {new Date(patch.publishedAt).toDateString()})
                    </span>

                    <div>{renderPatchText(patch.text)}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default PatchNotesPage;
