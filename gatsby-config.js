module.exports = {
  siteMetadata: {
    title: `Onyx Reporting Blog`,
    description: `Learn best practices and design patterns from Domo and Jet Reports consultant Jae Myong Wilson`,
    author: `@onyxreporting`,
    url: "http://www.onyxreporting.com",
    image: "/logo.svg",
    twitterUsername: "@jaewo1r",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
          {
            resolve: `remark-slug`,
          },
        ],
      },
    },

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:300,400, 400i,500,700i`,
          `roboto mono`,
          `muli\:400, 400i,700,700i`,
          `poppins\:300,400,400i,500,600,700i`,
        ],
        display: "swap",
      },
    },

    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
  ],
}
