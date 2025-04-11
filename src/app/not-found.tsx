import React from 'react';
import Link from 'next/link';
import content from '@/app/data/content.json';
import { Button } from '@/app/components/ui/shadcn/button';
<<<<<<< HEAD

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold">
          {content.notfound['notfound.title']}
        </h1>
        <p className="text-lg mt-4 mb-4">{content.notfound['notfound.text']}</p>
        <Button variant="notfound">
          <Link href="/" className="text-white hover:underline text-3xl">
            {content.notfound['notfound.back']}
          </Link>
        </Button>
      </div>
=======
//TODO Update this to match our style for the project

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-800">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        {content.notfound['notfound.title']}
      </h1>
      <p className="text-lg text-black dark:text-white mt-4 mb-4">
        {content.notfound['notfound.text']}
      </p>
      <Button variant="notfound">
        <Link
          href="/"
          className="text-white dark:text-white hover:underline text-3xl"
        >
          {content.notfound['notfound.back']}
        </Link>
      </Button>
>>>>>>> development
    </div>
  );
};

export default NotFoundPage;
