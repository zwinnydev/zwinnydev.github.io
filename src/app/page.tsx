import Image from "next/image";
import { FeatherIcon, FileVolumeIcon } from "lucide-react";
import { blogs, talks} from "#site/content";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import gugiFont from "@/components/ui/gugi-font";
import HighlightedLink from "@/components/ui/highlighted-link";
import ContentCategoryLink from "@/components/content/content-category-link";
import SeeYouThere from "@/components/content/event/see-you-there";
import Script from "next/script";

export default function Home() {
  return (
    <section className="space-y-6 pb-8 md:pb-12 lg:py-32">

             <Script
                src="lib/remove-workers.js"
                strategy="lazyOnload"
              />
      <div className="container flex max-w-5xl flex-col gap-4 xl:mt-0">
        <div className="grid sm:grid-cols-2">
          <div>
            <Image
              src={siteConfig.authorImage}
              alt={siteConfig.name}
              priority={false}
            />
          </div>
          <div className="flex-col">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl pb-8"><span className={cn("text-primary", gugiFont.className)}>Maciej Trojniarz</span></h1>
            <h2 className="text-2xl text-primary pb-4">Software crafstman | Trainer | Agile Coach</h2>
            <p>The Sorcerer’s Apprentice aka <HighlightedLink href="https://manifesto.softwarecraftsmanship.org/" label="Software Craftsmanship Journeyman"/> with experience in various industries and roles.</p>
            <p>I am enthusiast and evangelist of good engineering practices and <HighlightedLink href="https://agilemanifesto.org/" label="Agile management"/>.</p>
            <div className="space-x-4 pt-16">
              <ContentCategoryLink entries={blogs} href="/blog" label="Blog Posts" icon={{icon: FeatherIcon}}/>
              <ContentCategoryLink entries={talks} href="/talks" label="My Talks" icon={{icon: FileVolumeIcon}}/>
            </div>
          </div>
        </div>
        <SeeYouThere />
      </div>
    </section>
  );
}
