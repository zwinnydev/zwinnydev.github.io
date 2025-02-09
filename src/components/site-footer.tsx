import React from 'react';
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import gugiFont from "./ui/gugi-font";
import Socials from './socials';

export default function SiteFooter() {
    return <footer className="container border-t border-t-secondary/60 py-3 text-center">
        <div>
          <Socials />
        </div>
        <div className="text-xs text-muted-foreground mb-2">
          &copy; 2025 Created by{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.social.github}
            className={cn("text-primary", gugiFont.className)}
          >
            {siteConfig.author}
          </Link>
        </div>
      </footer>
}