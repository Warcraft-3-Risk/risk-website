'use client';

import CTAButton from '@/app/components/ui/CTAButtons';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/l-patch-notes.scss';
import { fetchGithubReleases, Release } from '@/core/utils/githubReleases';
import { CircleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';

interface PatchReleaseNotesProps {
  isExpanded: boolean;
  onToggleExpanded: () => void;
}
// Fetches the latest GitHub releases for the project
export default function PatchReleaseNotes({
  isExpanded,
  onToggleExpanded,
}: PatchReleaseNotesProps) {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  // useState to manage the loading state and releases data
  useEffect(() => {
    const getReleases = async () => {
      const data = await fetchGithubReleases();
      setReleases(data);
      setLoading(false);
    };

    getReleases();
  }, []);

  const visibleReleases = isExpanded ? releases : releases.slice(0, 3);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  const patchNotesContent = content.patchnotes;
  return (
    <div className="background min-h-screen w-full flex flex-col items-center px-2 sm:px-4">
      {visibleReleases.map((release, index) => {
        const isEven = index % 2 === 0;
        const variantClass = isEven ? 'yellow-theme' : 'sand-theme';

        return (
          <div
            key={release.id}
            className={`
              releasebox w-full sm:w-3/4 ${variantClass} mb-16
              transition-all duration-700 ease-out
            `}
          >
            <div className="p-2 themed-border">
              <div className="flex lg:flex-row sm:flex-row sm:items-center gap-4 sm:gap-10">
                <CircleAlert className="scale-150 sm:scale-200 ml-1 sm:ml-5 themed-icon mt-2 sm:mt-5" />
                <h2 className="patch-version text-2xl sm:text-4xl font-bold mt-2 sm:mt-5">
                  {release.name}
                </h2>
              </div>

              <span className="themed-text m-2 sm:m-3 inline-block text-xs font-medium px-2 py-1">
                {new Date(release.created_at).toDateString()}
              </span>

              <div className="themed-text ml-2 sm:ml-4 mt-2">
                <div className="markdown-body bg-[#1b3449]">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {release.body || 'No description provided.'}
                  </ReactMarkdown>
                </div>
                {release.body && release.body.length > 800 && (
                  <span className="italic text-sm">...</span>
                )}
              </div>
              <div className="patchnotes-parent">
                <CTAButton
                  variant="externalLink"
                  href={release.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm sm:text-base"
                >
                  {patchNotesContent['patchreleasenotes.github']}
                </CTAButton>
              </div>
            </div>
          </div>
        );
      })}

      <div className="ctabuttons flex gap-4 justify-end w-full">
        <Link
          href="https://www.wc3maps.com/map/363463/Risk_Europe_2.07.40"
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
    </div>
  );
}
