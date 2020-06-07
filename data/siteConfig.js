module.exports = {
  siteTitle: 'zwinny.dev',
  siteDescription: 'Maciej Trojniarz',
  siteKeywords: ['blog', 'software craftsmanship', 'react', 'js', 'java', 'programming', 'agile', 'coach', 'leadership'],
  authorName: 'Maciej Trojniarz',
  twitterUsername: 'MaciejTrojniarz',
  authorAvatar: 'Maciej_Trojniarz.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  The Sorcerer’s Apprentice aka Software Craftsmanship Journeyman with experience in various industries and roles. Enthusiast and evangelist of good engineering practices and Agile management.
  Board member of <a href="https://graosens.org.pl">Fundacja Gra o Sens</a> and expert at projects <a href="https://szkolaagile.graosens.org.pl">Szkoła Agile</a> and <a href="https://graosens.org.pl/poradnialidera">Poradnia Lidera</a>.
  `,
  siteUrl: 'https://zwinny.dev',
  disqusSiteUrl: 'https://zwinny.dev',
  // Prefixes all links. For cases when deployed to maciejtrojniarz.github.io/
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'banner.png', // file in content/images
  siteCoverLeft: 'zwinnyDevLogoBig-white.png',
  siteCoverRight: 'thinker-white.png',
  googleAnalyticsId: 'UA-167603283-2',
  background_color: '#0d0d0d',
  theme_color: '#0097A7',
  display: 'standalone',
  icon: 'content/images/zwinny-dev-icon-teal.png',
  postsPerPage: 7,
  disqusShortname: 'zwinnydev',
  headerTitle: '',
  headerLinksIcon: 'zwinnyDevLogoBig-white.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      icon: ['fas','feather-alt'],
      url: '/',
    },
    {
      label: 'My talks',
      icon: ['fab','youtube'],
      url: '/my-talks'
    },
    {
      label: 'About',
      icon: ['fas','address-card'],
      url: '/about-me'
    },
    // {
    //   label: 'Gra o Sens',
    //   icon: ['gosIcon'],
    //   url: 'https://graosens.org.pl',
    // },
  ],
  // // Footer information (ex: Github, Netlify...)
  // websiteHost: {
  //   name: 'GitHub',
  //   url: 'https://github.com',
  // },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          icon: ['fas','feather-alt'],
          url: '/',
        },
        {
          label: 'About',
          icon: ['fas','address-card'],
          url: '/about-me',
        },
        {
          label: 'My talks',
          icon: ['fab','youtube'],
          url: '/my-talks'
        },
        {
          label: 'Gra o Sens',
          icon: ['gosIcon'],
          url: 'https://graosens.org.pl',
        },
      ],
    },
    {
      sectionName: 'Contact author',
      links: [
        {
          label: 'MaciejTrojniarz',
          icon: ['fab','github'],
          url: 'https://github.com/MaciejTrojniarz',
        },
        {
          label: '@MaciejTrojniarz',
          icon: ['fab','twitter'],
          url: 'https://twitter.com/MaciejTrojniarz',
        },
        {
          label: 'LinkedIn',
          icon: ['fab','linkedin'],
          url: 'https://www.linkedin.com/in/maciejtrojniarz/',
        },
      ],
    },
  ],
}
