import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const LISTING_QUERY = graphql`
  query ListingQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`

const listing = () => {
  return (
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.frontmatter.slug}>
            <Link to={`/posts${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <em>{node.frontmatter.date}</em>
            <p>{node.excerpt} </p>
          </Post>
        ))
      }
    />
  )
}

export default listing
