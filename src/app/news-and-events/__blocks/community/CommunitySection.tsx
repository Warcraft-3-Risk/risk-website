import React from 'react';

const CommunitySection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Join Our Community
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Stay connected and be a part of our growing community. Share your
          thoughts, ideas, and feedback with us!
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
