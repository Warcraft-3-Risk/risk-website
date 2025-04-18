import React from 'react';
import Link from 'next/link';
import content from '@/app/data/content.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black dark:bg-neutral-800 dark:text-white py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div>
            <h4 className="font-semibold mb-2">
              {content.footer['footer.AboutText']}
            </h4>
            <ul className="space-y-1 text-sm text-gray-300 dark:text-white">
              <li>
                <Link
                  href="https://discord.gg/wc3risk"
                  className="hover:underline text-black dark:text-white"
                >
                  {content.footer['footer.DiscordText']}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline text-black dark:text-white"
                >
                  {content.footer['footer.ContactText']}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              {content.footer['footer.YouTubeText']}
            </h4>
            <ul className="space-y-1 text-sm text-gray-300 dark:text-white">
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline text-black dark:text-white"
                >
                  {content.footer['footer.PrivacyText']}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:underline text-black dark:text-white"
                >
                  {content.footer['footer.TermsText']}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-2 text-sm text-gray-400 dark:text-white text-center sm:text-left flex flex-col justify-between">
            <p className="mt-6 text-xs">
              &copy; {new Date().getFullYear()}{' '}
              {content.footer['footer.CompanyText']}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
