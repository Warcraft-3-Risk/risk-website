import React from 'react';
import Link from 'next/link';
import content from '../../../content/content.json';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {content.navbar['navbar.HomeText']}
          </Link>
          <Link
            href="/tournaments"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {content.navbar['navbar.ForumText']}
          </Link>
          <Link
            href="/leaderboard"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {content.navbar['navbar.LeaderboardText']}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
