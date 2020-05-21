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
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
      <p>In respense to the Covid-19 pandemic, a <a href="https://lux-covid19.lu/task-force" target="_blank" rel="noopener noreferrer">Luxembourg Task Force</a> has been created.</p>
      <p>
      <a href="https://uni.lu/snt" target="_blank" rel="noopener noreferrer">University of Luxembourg</a> and <a href="https://uni.lu" target="_blank" rel="noopener noreferrer">Interdisciplinary Center of Security & Trust</a> are working together 
      to provide analyses and potential solutions to the research community.
      </p>
      <p>The Covid-19 Adaptive Exit Strategies is a contribution from Prof Yves Le Traon and 3 of his PhD students: Salah Ghamizi, Guillaume Haben and Renaud Rwemalika</p>
    </Content>
  </Layout>
)

export default IndexPage
