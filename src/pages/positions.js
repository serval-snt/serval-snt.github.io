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
      <SEO title="Open positions" />
      <Content>
        <h1>Open positions</h1>
        <p>Thank you for your interest about opportunities in SerVal.</p>
        <p>Currently we don't have any open positions but if you are interested in possible future opportunities please send your resume to <a href="mailto:michail.papadakis@uni.lu">michail.papadakis@uni.lu</a></p>
      </Content>
    </Layout>
  )
}

export default IndexPage