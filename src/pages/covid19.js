import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Row = styled.div`
  display: flex;
`

const Column = styled.div `
  flex: 50%;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Covid19" />
      <Content>
            <h1>Covid19 Simulator</h1>
        
      </Content>
    </Layout>
  )
}

export default IndexPage
