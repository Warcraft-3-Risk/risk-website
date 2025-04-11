'use client';

import * as React from 'react';
import CalendarLib from 'react-calendar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/app/components/ui/shadcn/button';

import 'react-calendar/dist/Calendar.css';

function Calendar({
  className,
  onChange,
  value,
  ...props
}: React.ComponentProps<typeof CalendarLib>) {
  return (
    <div className={cn('p-3', className)}>
      <CalendarLib
        onChange={onChange}
        value={value}
        prevLabel={<ChevronLeft className="size-4" />}
        nextLabel={<ChevronRight className="size-4" />}
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: 'narrow' })
        }
        tileClassName={({ date, view }) =>
          cn(
            'text-sm text-center py-1 px-0 rounded-md transition-colors',
            buttonVariants({ variant: 'ghost' }),
            {
              'bg-primary text-white':
                value instanceof Date &&
                date.toDateString() === value.toDateString(),
              'opacity-50':
                view === 'month' &&
                date.getMonth() !==
                  (value instanceof Date
                    ? value.getMonth()
                    : new Date().getMonth()),
            },
          )
        }
        {...props}
      />
    </div>
  );
}

export { Calendar };
