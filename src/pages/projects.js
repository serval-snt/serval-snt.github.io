import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
  margin-bottom: 10px;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  margin-bottom: 10px;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Content>
        <h1>Projects</h1>
          <div key="0">
            <Link
              to={"covid19"}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <MarkerHeader>COVID-19 Adaptive Exit Strategies</MarkerHeader>
              <div>
                <ArticleDate>May, 2020</ArticleDate>
              </div>
              <p>Research project enabling simulations of various scenarios regarding lockdown exit strategies during COVID 19 crisis.</p>
            </Link>
          </div>
        {/* {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.frontmatter.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
              <div>
                <ArticleDate>{node.frontmatter.date}</ArticleDate>
              </div>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))} */}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "/(projects)/.*.md$/"}}
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
