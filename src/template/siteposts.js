import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SitePosts = ({ data }) => {
  const { heading, subheading, description, image } = data.contentfulSitePost
  return (
    <Layout>
      <SEO title={heading} />
      <div className="ourpost">
        <h1>{heading}</h1>
        <img alt={heading} src={image.file.url} />
        <h3>{subheading}</h3>
        <p>{description.content.value}</p>
        <Link to="/siteposts">View more posts</Link>
        <br />
        <Link to="/siteposts">Go Back</Link>
      </div>
    </Layout>
  )
}

export default SitePosts

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulSitePost(slug: { eq: $slug }) {
      heading
      subheading
      slug
      description {
        content {
          content {
            value
          }
        }
      }
      image {
        file {
          url
        }
      }
    }
  }
`
