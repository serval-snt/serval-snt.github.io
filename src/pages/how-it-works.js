import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Content = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 1.45rem 1.0875rem;
  font-size: 1.2rem;
  text-align: justify;
`

const IndexPage = () => (
  <Layout>
    <SEO title="How it works" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
        <iframe
            title="How it works slideshow"
            src="https://docs.google.com/presentation/d/e/2PACX-1vSqR1G3Di8m9vEoNSqTGncPXyqkaG2gsvJ8kxcasziFs5NcrnKIkqCker3uDrQteg/embed?start=false&loop=false&delayms=3000"
            frameBorder="0" width="1280" height="749" allowFullScreen="true" mozallowfullscreen="true"
            webkitallowfullscreen="true"></iframe>
    </Content>
  </Layout>
)

export default IndexPage
