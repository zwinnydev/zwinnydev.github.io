import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          siteCover
          siteCoverLeft
          siteCoverRight
          authorName
          authorAvatar
          authorDescription
          siteDescription
          siteKeywords
          twitterUsername
          disqusShortname
          disqusSiteUrl
          defaultLang
          headerTitle
          headerLinksIcon
          headerLinks {
            label
            icon
            url
          }
          footerLinks {
            sectionName
            links {
              label
              icon
              url
            }
          }
        }
      }
    }
  `)
  return result.site.siteMetadata
}

export default useSiteMetadata
