import { Icons } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { Contact, FeatherIcon, FileVolume, Mail } from "lucide-react";


export const NAV_LIST = [
  { label: "blog", path: "/blog", icon: FeatherIcon },
  { label: "talks", path: "/talks", icon: FileVolume },
  { label: "about", path: "/about", icon: Contact },
];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "Twitter", path: siteConfig.social.twitter, icon: Icons.x },
  { label: "LinkedIn", path: siteConfig.social.twitter, icon: Icons.linkedin }, 
  { label: "blueSky", path: siteConfig.social.bluesky, icon: Icons.blueSky },
  { label: "mail", path: "mailto:maciejtrojniarz@gmail.com", icon: Mail}
];
