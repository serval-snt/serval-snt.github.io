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
      <h2>About the University of Luxembourg</h2>
      <p>
        The{" "}
        <a href="https://uni.lu" target="_blank" rel="noopener noreferrer">
          University of Luxembourg
        </a>{" "}
        is a European research university with a distinctly international,
        multilingual and interdisciplinary character. It is a modern institution
        with a personal atmosphere, close to European institutions, innovative
        companies and the financial place. With over 6,400 students and about
        2,000 employees from all over the globe, the University offers a unique
        mix of international excellence and national relevance, delivering
        knowledge for society and businesses. The mandatory semester abroad for
        Bachelor’s students reflects the importance attached to mobility.
        Student exchange agreements and research cooperation agreements exist
        with more than 100 universities around the world. Our priorities for
        research are Materials Science, Computer Science and ICT Security,
        European and International Law, Finance and Financial Innovation,
        Education, Digital and Contemporary History, Health and Systems
        Biomedicine, and Data Modelling and Simulation.
      </p>

      <h2>About SnT</h2>
      <p>
        The{" "}
        <a href="https://uni.lu/snt" target="_blank" rel="noopener noreferrer">
          Interdisciplinary Centre for Security, Reliability and Trust (SnT)
        </a>{" "}
        at the University of Luxembourg conducts internationally competitive
        research in information and communication technology. In addition to
        long-term, high-risk research, SnT engages in demand-driven
        collaborative projects with industry and the public sector through its
        Partnership Program. The resulting concepts present a genuine,
        long-lasting competitive advantage for companies in Luxembourg and
        beyond.
      </p>
    </Content>
  </Layout>
)

export default IndexPage
