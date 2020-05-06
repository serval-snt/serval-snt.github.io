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
      <SEO title="Team" />
      <Content>
            <h1>Team</h1>
        <Row>
          <Column>
            <h2>Faculty</h2>
              <ul>
                <li>Prof Dr Yves LE TRAON</li>
              </ul>
            <h2>Research Associates</h2>
              <ul>
                <li>Dr Alexandre BARTEL</li>
                <li>Dr Andrey BOYSTOV</li>
                <li>Dr Renzo DEGIOVANNI</li>
                <li>Dr Sankalp GHATPANDE</li>
                <li>Yuejun GUO</li>
                <li>Dr Sarra HABCHI</li>
                <li>Dr Médéric HURIER</li>
                <li>Dr Ludovic MOULINE</li>
                <li>Dr Jérémy ROBERT</li>
                <li>Dr Imen SAYAR</li>
                <li>Dr Thierry TITCHEU CHEKAM</li>
                <li>Dr Kui LIU</li>
              </ul>
            </Column>
          <Column>
            <h2>Research Scientists</h2>
              <ul>
                <li>Dr Maxime CORDY</li>
                <li>Dr Mike PAPADAKIS</li>
              </ul>
            <h2>Doctoral Researchers</h2>
              <ul>
                <li>Nikolaos ANTONIADIS</li>
                <li>Paul-Lou BENEDICK</li>
                <li>Aayush GARG</li>
                <li>Salah GHAMIZI</li>
                <li>Martin GUBRI</li>
                <li>Guillaume HABEN</li>
                <li>Ahmed KHANFIR</li>
                <li>Niklas KOLBE</li>
                <li>Wei MA</li>
                <li>Milos OJDANIC</li>
                <li>Renaud RWEMALIKA</li>
                <li>Xavier SCHMITT</li>
              </ul>
            </Column>
          </Row>
      </Content>
    </Layout>
  )
}

export default IndexPage
