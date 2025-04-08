import content from '@/app/data/content.json';
import { Button } from '@/app/components/ui/shadcn/button';
import Link from 'next/link';

export default function StandAlonePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-800">
      <h1 className="text-4xl font-bold text-gray-600 dark:text-white mb-4">
        {content.standalone['standalone.title']}
      </h1>
      <p className="text-lg text-gray-600 dark:text-white mb-4">
        {content.standalone['standalone.text']}
      </p>
      <Link
        href="https://discord.com/channels/383292703955222542/1249508421355442236"
        target="_blank"
      >
        <Button>{content.standalone['standalone.button']}</Button>
      </Link>
    </div>
  );
}
