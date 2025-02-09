import React from 'react';
import { nearestEvents } from '@/content';
import EventCard from './event-card';
import gugiFont from '@/components/ui/gugi-font';
import { cn } from '@/lib/utils';

const SeeYouThere = () => nearestEvents.length > 0 && (
    <div className="container mt-8">
        <h2 className={cn("text-2xl font-extrabold text-primary", gugiFont.className)}>
            Where you can meet me next:
        </h2>
        <hr className='my-8'/>
        <div className={`grid gap-10 sm:grid-cols-${Math.min(3,nearestEvents.length)}`}>
        {
            nearestEvents.map(nextMeeting => <EventCard key={nextMeeting.slug} event={nextMeeting} />)
        }
        </div>
        <hr className='my-8'/>
    </div>
)

export default SeeYouThere;