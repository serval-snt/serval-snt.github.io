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
        <p>Thank you for your considering opportunities at SerVal.</p>
        <p>We will list open positions here. In the meantime, feel free to send your resume to <a href="mailto:yves.letraon@uni.lu">yves.letraon@uni.lu</a></p>
      </Content>
    </Layout>
  )
}

export default IndexPage