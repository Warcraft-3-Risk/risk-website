'use client';
import TournamentHeader from '@/app/tournaments/__blocks/TournamentHeader';
import { Calendar } from '@/app/components/ui/shadcn/calendar';
import React from 'react';

//TODO: Make this showcase dates and data of the tournaments including other events.
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
