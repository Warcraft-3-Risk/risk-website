import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">News</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example news card */}
          <article className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">News Title</h2>
              <p className="text-gray-600 text-sm mb-4">
                A brief description of the news article goes here.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read more
              </a>
            </div>
          </article>
          {/* Repeat similar cards for more news */}
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; 2023 Your Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;
