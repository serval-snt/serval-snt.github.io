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
      <p>The Security Design and Validation Research Group – SERVAL – is headed by Professor Yves Le Traon.</p>
      <p>SERVAL conducts research on software engineering, and more specifically on modelling and design for security, as well as on validation of 
      functional/security mechanisms for systems and software.</p> 
      <p>Among the issues addressed by the group, we can mention</p>
        <ul>
          <li>The use of Model Driven Engineering for designing secure systems</li>
          <li>Model composition and aspect weaving to develop adaptive security and testable mechanisms</li>
          <li>The definition of security policies and dedicated testing techniques (mutation, evolutionary algorithms, static analysis) to ensure that 
          functional and security mechanisms (privacy, access control, usage control, encryption) are correctly implemented and deployed.</li>
        </ul> 
        <p>The domains of application concern Ambient Assisted Living using sensor networks, information systems, distributed systems, 
        web-applications, SOA, mobile apps.</p>
    </Content>
  </Layout>
)

export default IndexPage
