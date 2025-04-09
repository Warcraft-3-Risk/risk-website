import React from 'react';
import Link from 'next/link';
import content from '@/app/data/content.json';
import { Button } from '@/app/components/ui/shadcn/button';
import Image from 'next/image';

import NotFoundImage from '@/assets/images/not-found.png';

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={NotFoundImage}
          alt="Not Found"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

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
    </div>
  );
};

export default NotFoundPage;
