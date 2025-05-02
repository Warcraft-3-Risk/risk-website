'use client';

import { useEffect, useState } from 'react';
import { CircleAlert } from 'lucide-react';
import '@/core/SCSS/base/layout/l-patch-notes.scss';
import CTAButton from '@/app/components/ui/CTAButtons';
import router from 'next/router';
import content from '@/app/data/content.json';
type Release = {
  id: number;
  name: string;
  tag_name: string;
  body: string;
  html_url: string;
  created_at: string;
};

interface PatchReleaseNotesProps {
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

export default function PatchReleaseNotes({
  isExpanded,
  onToggleExpanded,
}: PatchReleaseNotesProps) {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const res = await fetch(
          'https://api.github.com/repos/Warcraft-3-Risk/wc3-risk-system/releases',
          {
            headers: {
              Accept: 'application/vnd.github+json',
            },
          },
        );

        const data = await res.json();
        const sorted = [...data].sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        );
        setReleases(sorted);
      } catch (err) {
        console.error('Failed to fetch releases:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  const visibleReleases = isExpanded ? releases : releases.slice(0, 3);

  if (loading) {
    return (
      <p className="text-center text-lg mt-10">
        {content.patchnotes['patchreleasenotes.loading']}
      </p>
    );
  }

  return (
    <div className="background min-h-screen w-full flex flex-col items-center px-2 sm:px-4">
      {visibleReleases.map((release, index) => {
        const isEven = index % 2 === 0;
        const variantClass = isEven ? 'yellow-theme' : 'sand-theme';

        return (
          <div
            key={release.id}
            className={`releasebox w-full sm:w-3/4 ${variantClass} mb-16`}
          >
            <div className="p-2 themed-border">
              <div className="spurgt flex lg:flex-row sm:flex-row sm:items-center gap-4 sm:gap-10">
                <CircleAlert className="scale-150 sm:scale-200 ml-1 sm:ml-5 themed-icon mt-2 sm:mt-5" />
                <h2 className="titletext text-2xl sm:text-4xl font-bold mt-2 sm:mt-5">
                  {release.name}
                </h2>
              </div>

              <span className="themed-text m-2 sm:m-3 inline-block text-xs font-medium px-2 py-1">
                {new Date(release.created_at).toDateString()}
              </span>

              <div className="themed-text ml-2 sm:ml-4 mt-2 whitespace-pre-line text-sm sm:text-base">
                {release.body?.slice(0, 800) || 'No description provided.'}
                {release.body && release.body.length > 800 && '...'}
              </div>

              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 inline-block text-sm sm:text-base"
              >
                {content.patchnotes['patchreleasenotes.github']}
              </a>
            </div>
          </div>
        );
      })}
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
    </div>
  );
}
