/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import sntLogo from '../images/snt.logo.png';
import uniLogo from '../images/uni.lu.logo.png';

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Main = styled.main`
  flex: 1;
`

const SntLogo = () => (
  <img height="65px" src={sntLogo} alt="logo" style={{marginRight: "10px"}}></img>
);

const UniLogo = () => (
  <img height="50px" src={uniLogo} alt="logo" style={{marginTop: "7px", marginLeft: "20px"}}></img>
);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Content>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Main>{children}</Main>
          <Footer>
            <SntLogo></SntLogo>
            <p>Copyright © {new Date().getFullYear()}, Serval, SnT, University of Luxembourg. All right reserved.</p>
            <UniLogo></UniLogo>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
