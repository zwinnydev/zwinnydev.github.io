import React from "react";
import PageHeader from "@/components/page-header";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import gugiFont from "@/components/ui/gugi-font";
import HighlightedLink from "@/components/ui/highlighted-link";
import Socials from "@/components/socials";

export const metadata: Metadata = {
  title: "About Maciej Trojniarz",
};

export default function AboutPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader title="About me" description="Let's get to know each other" />
      <hr className="my-8" />

      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <div className="mx-auto mt-8 w-[400px]">
          <div className="relative flex flex-col items-center gap-2 rounded-md bg-secondary px-4 py-6">
            <Image
              src={siteConfig.authorImage}
              width={82}
              height={82}
              alt={siteConfig.name}
              className="absolute -top-8 mb-4 rounded-full border bg-primary"
            />
            <h3 className={cn("mt-8 text-lg font-semibold text-primary", gugiFont.className)}>{siteConfig.author}</h3>
            <p className="text-center text-sm text-muted-foreground">
              Software Craftsman | Trainer | Agile Coach
            </p>
            <Socials />
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground lg:text-start xl:text-base" style={{display: "flex", flexDirection: "column", gap: "1em"}}>
          <p>
            The Sorcerer’s Apprentice aka Software Craftsmanship Journeyman with experience in various industries and roles. I am enthusiast and evangelist of good engineering practices and Agile management.
          </p>
          <p>
            I strongly believe in <HighlightedLink href="https://manifesto.softwarecraftsmanship.org/" label="Software Craftsmanship movement"/>.
            I am trying to spread my knowledge and passion to others.
            That’s the reason why I am actively involved in many activities conducted by <HighlightedLink href="https://graosens.org.pl" label="Fundacja Gra o Sens"/> like <HighlightedLink href="https://szkolaagile.graosens.org.pl" label="School of Agile"/> and <HighlightedLink href="https://graosens.org.pl/poradnialidera" label="Poradnia Lidera"/>.
            One of the hosts for <HighlightedLink href="https://www.meetup.com/pl-PL/tech-bytes-ocado-technology-wroclaw/" label="techBytes @ Ocado Technology Wrocław" /> and regular participant in various meetups and conferences.
          </p>
          <p>
            My free-time is taken by wife, 2 daugthers, board games, cosplaying or selling books of my wife <HighlightedLink href="https://evideth.pl/" label="Evi'Deth"/>.
          </p>
        </div>
      </div>
    </div>
  );
}