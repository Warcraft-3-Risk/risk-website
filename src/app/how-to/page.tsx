import React from 'react';

const HowToPage: React.FC = () => {
  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-4">How To</h1>
      <p className="mb-4">
        Welcome to the How-To page! Here you will find instructions and guides
        to help you.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Step 1: Understand the basics.</li>
        <li>Step 2: Follow the instructions carefully.</li>
        <li>Step 3: Reach out if you need help.</li>
      </ul>
    </div>
  );
};

export default HowToPage;
