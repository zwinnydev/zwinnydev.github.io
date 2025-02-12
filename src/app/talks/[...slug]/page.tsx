import React from "react";
import { Metadata } from "next";
import { talks as allTalks } from "#site/content";
import { cn, formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
import { Mdx } from "@/components/content/mdx-component";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import gugiFont from "@/components/ui/gugi-font";
import TalkVideo from "@/components/content/talk/talk-video";
import ContentImage from "@/components/content/content-image";
import { socialMediaMetadata } from "@/lib/social-media";

interface TalkPageItemProps {
  params: {
    slug: string[];
  };
}

async function getTalkFromParams(params: TalkPageItemProps["params"]) {
  const slug = params?.slug.join("/");
  const talk = allTalks.find((talk) => talk.slugAsParams === slug);

  if (!talk) {
    return null;
  }

  return talk;
}

export async function generateMetadata({
  params,
}: TalkPageItemProps): Promise<Metadata> {
  const talk = await getTalkFromParams(params);

  if (!talk) {
    return {};
  }

  return {
    title: talk.title,
    description: talk.description,
    authors: {
      name: talk.author,
    },
    ...socialMediaMetadata(talk)
  };
}

export async function generateStaticParams(): Promise<
  TalkPageItemProps["params"][]
> {
  return allTalks.map((talk) => ({
    slug: talk.slugAsParams.split("/"),
  }));
}

export default async function TalkPageItem({ params }: TalkPageItemProps) {
  const talk = await getTalkFromParams(params);

  if (!talk) {
    return {};
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        {talk.date && (
          <time
            dateTime={talk.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(talk.date)}
          </time>
        )}
        <h1 className={cn("mt-2 inline-block text-4xl font-bold leading-tight text-primary lg:text-5xl", gugiFont.className)}>
          {talk.title}
        </h1>
        <ContentImage content={talk}/>
        <TalkVideo content={talk}/>
        {talk.body && <Mdx code={talk.body} />}
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/talks"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <ChevronLeft className="mr-2 size-4" />
            See all talks
          </Link>
        </div>
      </div>
    </article>
  );
}
