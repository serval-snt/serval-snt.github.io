import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faBug, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

const Content = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 1.45rem 1.0875rem;
  font-size: 1.2rem;
  text-align: center;
`

const Row = styled.div`
  display: flex;
`

const Column = styled.div `
  flex: 50%;
  margin: 20px;
`

const Description = styled.p `
  padding-bottom: 1.5em,
  text-align: justify
`

const Ul = styled.ul `
  list-style: none
`

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
      <h1 style={{paddingBottom:"30px"}}>SEcurity, Reasoning and VALidation</h1>
        <Row>
        <Column>
          <FontAwesomeIcon icon={faBug} size="5x" style={{color:"#e4251c", paddingBottom:"30px"}} />
          <h2>Software Engineering, Analysis and Testing</h2>
          <Description>
            <Ul>
              <li>Software maintenance</li>
              <li>Code evolution</li>
              <li>Test generation</li>
              <li>Mutation testing</li>
              <li>Anomaly detection</li>
              <li>Test flakiness</li>
              <li>Debugging</li>
            </Ul>
            </Description>
        </Column>
        <Column>
          <FontAwesomeIcon icon={faChartLine} size="5x" style={{color:"#5b2b83", paddingBottom:"30px"}} />
          <h2>AI, Machine Learning and Data Science</h2>
          <Description>
            <Ul>
              <li>Biais and fairness</li>
              <li>Robustness</li>
              <li>Distribution shift</li>
              <li>Adversarial attacks</li>
              <li>Deep learning</li>
              <li>Data imbalance</li>
              <li>Transfer learning</li>
            </Ul>
          </Description>
        </Column>
        <Column>
          <FontAwesomeIcon icon={faClipboardCheck} size="5x" style={{color:"#009fd8", paddingBottom:"30px"}} />
          <h2>Formal Verification and Optimization</h2>
          <Description>
            <Ul>
              <li>Model checking</li>
              <li>Software and system variability</li>
              <li>Cyber-physical systems</li>
              <li>Model-driven engineering</li>
              <li>Design space exploration</li>
            </Ul>
          </Description>
        </Column>
      </Row>
    </Content>
  </Layout>
)

export default IndexPage
