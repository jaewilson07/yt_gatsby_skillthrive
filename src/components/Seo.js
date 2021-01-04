import React from "react"
import { Helmet } from "react-helmet"

import { StaticQuery, graphql } from "gatsby"

export const Seo = ({ description, keywords, title, image, url, author }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaTitle = title || data.site.siteMetadata.title
      const metaAuthor = author || data.site.siteMetadata.author
      const metaImage = image || data.site.siteMetadata.image

      let metaKeywords = [
        "Onyx Reporting",
        "Onyx Reporting Blog",
        "Domo",
        "Domo Tutorial",
        "Domo Best Practices",
      ]

      const metaUrl = url || data.site.siteMetadata.url
      metaKeywords = keywords ? keywords.concat(metaKeywords) : metaKeywords

      return (
        <Helmet
          title={title}
          meta={[
            { name: `description`, content: metaDescription },
            { property: `og:title`, content: metaTitle },
            { property: `og:description`, content: metaDescription },
            { property: `og:type`, content: `website` },
            { property: `og:image`, content: metaImage },
            { property: `og:url`, content: metaUrl },
            { name: `twitter:card`, content: `summary_large_image` },
            { name: `twitter:creator`, content: metaAuthor },
            { name: `twitter:title`, content: metaTitle },
            { name: `twitter:description`, content: metaDescription },
            { name: `twitter:image`, content: metaImage },
          ].concat(
            metaKeywords && metaKeywords.length > 0
              ? { name: `keywords`, content: metaKeywords.join(", ") }
              : []
          )}
        />
      )
    }}
  />
)

const detailsQuery = graphql`
  query defaultSeoQuery {
    site {
      siteMetadata {
        description
        title
        author
        image
      }
    }
  }
`
