import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Covid19Component from "../components/covid19-form"

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
            <Covid19Component/>
      </Content>
    </Layout>
  )
}

export default IndexPage
