import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LoadableCovid from "../components/loadableCovid"

const Content = styled.div`
  margin: 0 auto;
  max-width: 2000px;
  padding: 1.45rem 1.0875rem;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Covid19" />
      <Content>
            <h1>Covid19 Simulator</h1>
            <LoadableCovid/>
      </Content>
    </Layout>
  )
}

export default IndexPage
