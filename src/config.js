module.exports = {
  BASE_URL: "/blog",

  POST_PER_PAGE: 3,
  IGNORE_INDEX: false,
  GATSBY_TRAILINGSLASH: false,
  GATSBY_PATHPREFIX: "/",
  SIDEBAR_FRONTLINE: false,

  siteMetadata: {
    title: "Onyx Reporting Blog",
    description:
      "`Learn best practices and design patterns from Domo and Jet Reports consultant Jae Myong Wilson`",
    author: `@onyxreporting`,
    url: "http://www.onyxreporting.com",

    image: "/logo.svg",

    docsLocation: null,
    favicon: null,
  },

  social: {
    twitterUsername: "@jaewor",
    ogImage: null,
  },
  header: {
    githubUrl: "http://github.com/jaewilson07",
    helpUrl: null,
    tweetText: null,
    headerLinks: null,
  },

  search: {
    enabled: false,
    indexName: "",
    algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
    algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
  },

  headerNav: [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "resume", title: "Resume" },
    { id: "blog", title: "Blog", isPage: 1 },
    { id: "testimonials", title: "Testimonials" },
    { id: "contact", title: "Contact" },
  ],
}
