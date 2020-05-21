import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  font-size: 1.2rem;
  text-align: justify;
`

const IndexPage = () => (
  <Layout>
    <SEO title="User Guide" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
      <p>Help</p>
    </Content>
  </Layout>
)

export default IndexPage
