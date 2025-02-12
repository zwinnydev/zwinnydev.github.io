import { defineCollection, defineConfig, s } from "velite";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const contentFields = (defaultImage: string) => ({
    slug: s.path(),
    title: s.string().max(99),
    description: s.string().max(999),
    published: s.boolean().default(true),
    image: s.string().max(99).default(defaultImage),
    body: s.mdx(),
    tags: s.array(s.string()).default([]),
    language: s.string().default('en'),
  })

const blogs = defineCollection({
  name: "Blog",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      ...contentFields('/images/blog/default.png'),
      date: s.isodate(),
      author: s.string().default('Maciej Trojniarz')
    })
    .transform(computedFields),
});

const talks = defineCollection({
  name: "Talk",
  pattern: "talks/**/*.mdx",
  schema: s
    .object({
      ...contentFields(''),
      date: s.isodate(),
      videoLink: s.string().default(''),
      author: s.string().default('Maciej Trojniarz')
    })
    .transform(computedFields),
});

const events = defineCollection({
  name: "Event",
  pattern: "events/**/*.mdx",
  schema: s
    .object({
      ...contentFields(''),
      date: s.isodate(),
      where: s.string(),
      mapPin: s.string(),
      time: s.string(),
      speaking: s.boolean().default(false),
      hosting: s.boolean().default(false),
      link: s.string(),
    })
    .transform(computedFields),
});

const workshops = defineCollection({
  name: 'Workshop',
  pattern: "workshops/**/*.mdx",
  schema: s.object({
    slug: s.path(),
    title: s.string().max(99),
    published: s.boolean().default(true),
    image: s.string().max(99),
    body: s.mdx(),
    tags: s.array(s.string()).default([])
  })
})

export default defineConfig({
  root: "./src/content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[text]",
    clean: true,
  },
  collections: {
    blogs,
    talks,
    events,
    workshops
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug as any,
      [rehypePrettyCode, { theme: "dracula" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
