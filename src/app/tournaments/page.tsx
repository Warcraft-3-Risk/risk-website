'use client';
import TournamentHeader from '@/app/tournaments/__blocks/TournamentHeader';
import { Calendar } from '@/app/components/ui/shadcn/calendar';
import React from 'react';

//TODO: This is the tournament page, which will show the tournament calendar and the tournament header.
const TournamentPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="container mx-auto p-4">
      <TournamentHeader />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default TournamentPage;
