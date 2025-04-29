'use client';
import React from 'react';

import LeaderBoardHeader from '@/app/leaderboards/__blocks/LeaderBoardHeader';
import LeaderBoardPagination from '@/app/leaderboards/__blocks/LeaderBoardPagination';
import LeaderBoardTable from './__blocks/LeaderBoardTable';

const LeaderboardsPage = () => {
  return (
    <section className="bg-[#0C2A46] text-white py-12 px-6 min-h-screen w-full">
      <div className="container w-full flex flex-col items-center">
        <LeaderBoardHeader />

        <div className="w-full max-w-5xl rounded-lg p-6">
          <LeaderBoardTable />
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <LeaderBoardPagination
            currentPage={1}
            totalPages={5}
            onPageChange={(page) => {
              console.log('Go to page:', page);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LeaderboardsPage;
