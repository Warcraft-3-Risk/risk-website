'use client';

import { useEffect, useState } from 'react';
import patchNotesData from '@/app/data/patch-notes.json';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/layout/l-patch-notes.scss';

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
          <p key={index} className="ml-4 text-gray-800">
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
        <h1 className="titletext text-7xl font-bold mb-4 flex justify-center">
          PATCH NOTES
        </h1>

        <div className="background min-h-screen w-full">
          {loading ? (
            <p className="text-center text-lg mt-10">Loading patch notes...</p>
          ) : (
            patchNotes.map((patch) => (
              <div
                key={patch.id}
                className="mb-10 p-6 border border-gray-300 rounded-lg bg-white shadow"
              >
                <h2 className="text-2xl font-bold">
                  {patch.title}{' '}
                  <span className="text-gray-500 text-sm font-normal">
                    ({new Date(patch.publishedAt).toDateString()})
                  </span>
                </h2>
                <p className="text-sm text-gray-600 mb-2">By {patch.author}</p>
                <div>{renderPatchText(patch.text)}</div>
                <div className="mt-2">
                  {patch.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 mr-2 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PatchNotesPage;
