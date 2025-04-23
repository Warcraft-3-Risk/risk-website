import React from 'react';

const StreamersPage: React.FC = () => {
  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
        Streamers
      </h1>
      <p className="mb-4 text-black dark:text-white">
        Welcome to the Streamers page! Here you will find a list of streamers
        who are part of our community.
      </p>
      <ul className="list-disc list-inside space-y-2 text-black dark:text-white">
        <li>Streamer 1</li>
        <li>Streamer 2</li>
        <li>Streamer 3</li>
      </ul>
    </div>
  );
}

export default StreamersPage;