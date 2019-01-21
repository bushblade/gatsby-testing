import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark: { edges } }) => (
      <aside>
        <h3>Archive</h3>
        <ArchiveList>
          {edges.map(({ node: { frontmatter } }) => (
            <li key={frontmatter.slug}>
              <Link to={`/posts${frontmatter.slug}`}>{frontmatter.title}</Link>
            </li>
          ))}
        </ArchiveList>
      </aside>
    )}
  />
)

export default Archive
