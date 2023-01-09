import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 1.45rem 1.0875rem;
  text-align: center;
`

const Row = styled.div`
  display: flex;
`

const Column = styled.div `
  flex: 50%;
`

const Center = styled.div `
  text-align: center;
  font-size: 1.5em
`

const List = styled.ul `
  list-style: none;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Team" />
      <Content>
            <h1>Team</h1>
            <Center>🇦🇱 🇩🇿 🇦🇷 🇧🇪 🇧🇷 🇨🇲 🇨🇳 🇫🇷 🇩🇪 🇬🇷 🇮🇳 🇮🇹 🇱🇺 🇲🇦 🇲🇽 🇲🇪 🇳🇱 🇳🇬 🇷🇺 🇷🇼 🇰🇷 🇸🇾 🇹🇼 🇹🇳</Center>
            <br />
        <Row>
          <Column>
            <h2>Faculty</h2>
              <List>
                <li>Prof Dr Yves LE TRAON</li>
              </List>
            <h2>Research Scientists</h2>
              <List>
                <li>Dr Maxime CORDY</li>
                <li>Dr Mike PAPADAKIS</li>
                <li>Dr Sylvain KUBLER</li>
              </List>
            <h2>Post Docs</h2>
              <List>
                <li>Dr Renzo DEGIOVANNI</li>
                <li>Dr Salah GHAMIZI</li>
                <li>Dr Yu-Lin HUANG</li>
                <li>Dr Matthieu JIMENEZ</li>
                <li>Dr Sami LAZREG</li>
                <li>Dr Guilain LEDUC</li>
                <li>Dr Julien POLGE</li>
                <li>Dr Jeongju SOHN</li>
                <li>Dr Ezekiel SOREMEKUN</li>
              </List>
          </Column>
          <Column>
            <h2>Doctoral Researchers</h2>
              <List>
                <li>Fabien BERNIER</li>
                <li>Luiz DE ALENCAR CARVALHO</li>
                <li>Salijona DYRMISHI</li>
                <li>Aayush GARG</li>
                <li>Martin GUBRI</li>
                <li>Guillaume HABEN</li>
                <li>Qiang HU</li>
                <li>Dorian JOUBAUD</li>
                <li>Ahmed KHANFIR</li>
                <li>Milos OJDANIC</li>
                <li>Yu PEI</li>
                <li>Anna PRESCIUTTINI</li>
                <li>Marcelo Luis RUIZ RODRIGUEZ</li>
                <li>Thibault SIMONETTO</li>
                <li>Badr SOUANI</li>
                <li>Stefanos STAVROPOULOS</li>
                <li>Hilal TAHA</li>
                <li>Valeria TROMBETTA</li>
                <li>Olivier ZEYEN</li>
              </List>
          </Column>
          <Column>
            <h2>R&D Specialists</h2>
              <List>
                <li>Dr Yu-Lin HUANG</li>
                <li>Dr Guilain LEDUC</li>
                <li>Luc STEBENS</li>
              </List>
            <h2>Alumni</h2>
              <List>
                <li>Dr Nikolaos ANTONIADIS</li>
                <li>Dr Alexandre BARTEL</li>
                <li>Dr Paul-Lou BENEDICK</li>
                <li>Dr Andrey BOYSTOV</li>
                <li>Adriano FRANCI</li>
                <li>Sankalp GHATPANDE</li>
                <li>Dr Yuejun GUO</li>
                <li>Dr Sarra HABCHI</li>
                {/* <li>Dr Niklas KOLBE</li> */}
                {/* <li>Dr Kui LIU</li> */}
                <li>Dr Wei MA</li>
                <li>Dr Ludovic MOULINE</li>
                <li>Dr Jérémy ROBERT</li>
                <li>Dr Renaud RWEMALIKA</li>
                {/* <li>Dr Imen SAYAR</li> */}
                <li>Dr Thierry TITCHEU CHEKAM</li>
                <li>and many more...</li>
              </List>
            </Column>
          </Row>
      </Content>
    </Layout>
  )
}

export default IndexPage
