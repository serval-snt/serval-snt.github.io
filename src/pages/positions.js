import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  text-align: center;
`


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Open positions" />
      <Content>
        <h1>Open positions</h1>
        <p>Follow the link to <a href="https://recruitment.uni.lu/en/index.html?LOV52=All&SUBDEPT2=27&LOV53=All&keywords=serval&Resultsperpage=10&srcsubmit=Search&statlog=1&ID=QMUFK026203F3VBQB7V7VV4S8&mask=karriereseiten&LG=UK" target="_blank">our portal</a> to find our job offers.</p>
      </Content>
    </Layout>
  )
}

export default IndexPage