const twitterMetadata = ({description, title, image}:{description: string, title: string, image:string}) => ({
  twitter: {
    site: "@maciej.trojniarz",
    creator: "@maciej.trojniarz",
    card: "summary_large_image",
    description,
    title,
    image
  }
})

const openGraph = ({slug, title, image}: {slug: string, title: string, image: string}) => ({
    openGraph: {
        type: "article",
        url: `https://zwinny.dev/${slug}`,
        siteName: "zwinny.dev | Maciej Trojniarz",
        title: title,
        images: [{ url: image }],
      },
})

export const socialMediaMetadata = (content: {slug: string, title: string, image: string, description: string}) => ({
    ...openGraph(content),
    ...twitterMetadata(content)
})