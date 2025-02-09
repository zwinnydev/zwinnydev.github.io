import authorAvatar from "../../public/images/author/MaciejTrojniarz.jpg";
export const siteConfig = {
  name: "zwinny.dev",
  description:
    "", // TODO
  author: "zwinny.dev",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/MaciejTrojniarz",
    twitter: "https://x.com/MaciejTrojniarz",
    linkedin: "linkedin.com/in/maciejtrojniarz",
    bluesky: "https://bsky.app/profile/zwinny.dev"
  },
};

export type SiteConfig = typeof siteConfig;
