import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Publications" />
      <Content>
        <h1>Publications</h1>
      </Content>
    </Layout>
  )
}

export default IndexPage
