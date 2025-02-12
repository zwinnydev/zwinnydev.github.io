import React from "react";
import { ChevronLeft, LinkIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import "@/styles/mdx.css";
import { events } from "#site/content";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FormattedDate from "@/components/ui/formatted-date";
import gugiFont from "@/components/ui/gugi-font";
import Time from "@/components/ui/time";
import Place from "@/components/ui/place";
import { Mdx } from "@/components/content/mdx-component";
import ContentImage from "@/components/content/content-image";
import { socialMediaMetadata } from "@/lib/social-media";

interface EventPageItemProps {
  params: {
    slug: string[];
  };
}

async function getEventFromParams(params: EventPageItemProps["params"]) {
  const slug = params?.slug.join("/");
  const event = events.find((event) => event.slugAsParams === slug);

  if (!event) {
    return null;
  }

  return event;
}

export async function generateMetadata({
  params,
}: EventPageItemProps): Promise<Metadata> {
  const event = await getEventFromParams(params);

  if (!event) {
    return {};
  }

  return {
    title: event.title,
    description: event.description,
    keywords: event.tags,
    ...socialMediaMetadata(event)
  };
}

export async function generateStaticParams(): Promise<
  EventPageItemProps["params"][]
> {
  return events.map((event) => ({
    slug: event.slugAsParams.split("/"),
  }));
}

export default async function eventPageItem({ params }: EventPageItemProps) {
  const event = await getEventFromParams(params);

  if (!event) {
    return {};
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        <h1 className={cn("mt-2 inline-block text-4xl font-bold capitalize leading-tight text-primary lg:text-5xl", gugiFont.className)}>
          {event.title}
        </h1>
        <div className="text-sm items-center text-muted-foreground my-8" style={{display: 'flex', gap: '8px', width: "100%"}}>
          <Place address={event.where} mapPin={event.mapPin}/> 
          <span>|</span>
          <FormattedDate date={event.date}/>
          <span>|</span>
          <Time time={event.time}/>
          { event.link &&(
            <>
              <span>|</span>
              <Link href={event.link} style={{display: 'flex', gap: '8px'}}><LinkIcon/>more</Link>
            </>)}
        </div>
        <ContentImage content={event} />
        
        {event.body && <Mdx code={event.body} />}

        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/events"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <ChevronLeft className="mr-2 size-4" />
            See all events
          </Link>
        </div>
      </div>
    </article>
  );
}
