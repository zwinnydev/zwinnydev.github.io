import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import { talks as allTalks } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import gugiFont from "@/components/ui/gugi-font";

export const metadata: Metadata = {
  title: "Talks",
};

export default function BlogPage() {
  const talks = allTalks
    .filter((talk) => talk.published)
    .filter((blog) => new Date(blog.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <PageHeader
        title="Talks"
      />
      <hr className="my-8" />

      {talks.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {talks.map((talk) => (
            <article
              key={talk.slug}
              className="group relative flex flex-col space-y-2"
            >
              {talk.image && (
                <Image
                  src={talk.image}
                  alt={talk.title}
                  width={804}
                  height={452}
                  className="border bg-secondary transition-colors"
                />
              )}

              <h2 className={cn("text-2xl font-extrabold text-primary", gugiFont.className)}>
                {talk.title}
              </h2>
              {talk.description && (
                <p className="text-muted-foreground">{talk.description}</p>
              )}

              {talk.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(talk.date)}
                </p>
              )}

              <Link href={talk.slug} className="absolute inset-0">
                <span className="sr-only">View Talk</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No talks found</p>
      )}
    </div>
  );
}
