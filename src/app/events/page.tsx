import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import { futureEvents, pastEvents } from "@/content";
import Image from "next/image";
import { Event } from "#site/content";
import gugiFont from "@/components/ui/gugi-font";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import Place from "@/components/ui/place";
import FormattedDate from "@/components/ui/formatted-date";
import Time from "@/components/ui/time";
import EventCard from "@/components/content/event/event-card";

export const metadata: Metadata = {
  title: "events",
};

export default function EventsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      {futureEvents.length > 0 && (
        <>
          <PageHeader
            title="Let's meet on upcomming events"
          />
          <hr className="my-8" />
          <div className="grid gap-10 sm:grid-cols-2">
            {futureEvents.map((event) => (
              <article
                key={event.slug}
                className="group relative flex flex-col space-y-2"
              >
                <EventCard event={event}/>
              </article>
            ))}
          </div>
        </>
      )}

      {pastEvents.length > 0 && (
        <div className="py-6">
          <PageHeader
            title="Past events"
          />
          <hr className="my-8" />
          <div className="grid gap-10 sm:grid-cols-2">
            {pastEvents.map((event) => (
              <article
                key={event.slug}
                className="group relative flex flex-col space-y-2"
              >
                <EventCard event={event}/>
              </article>
            ))}
          </div>
        </div>
      )}
      {!pastEvents.length && !futureEvents.length && (
        <p>No events found</p>
      )}
    </div>
  );
}
