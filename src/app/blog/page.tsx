import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import { blogs as allBlogs } from "#site/content";
import PageHeader from "@/components/page-header";
import gugiFont from "@/components/ui/gugi-font";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const blogs = allBlogs
    .filter((blog) => blog.published)
    .filter((blog) => new Date(blog.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <PageHeader
        title="Blog"
        // description="A blog using velite. Posts are written in MDX"
      />
      <hr className="my-8" />

      {blogs.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group relative flex flex-col space-y-2"
            >
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={804}
                  height={452}
                  className="border transition-colors"
                />
              )}

              <h2 className={cn("text-2xl font-extrabold text-primary", gugiFont.className)}>
                {blog.title}
              </h2>
              {blog.description && (
                <p className="text-muted-foreground">{blog.description}</p>
              )}

              {blog.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(blog.date)}
                </p>
              )}

              <Link href={blog.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No Blogs found</p>
      )}
    </div>
  );
}
