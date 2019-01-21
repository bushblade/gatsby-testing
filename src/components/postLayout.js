import React from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'

// Static Query
// used anywhere, doesn't accept any variable, can't use context

// Page Query
// Must be used on pages

const postLayout = ({ data: { markdownRemark }, location }) => {
  return (
    <Layout location={location}>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <h3>{markdownRemark.frontmatter.date}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
    </Layout>
  )
}

export default postLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
