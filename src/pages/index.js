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
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
    <p>
        A team at the University of Luxembourg’s Interdisciplinary Centre for
        Security, Reliability and Trust (SnT), led by SnT Vice-Director Yves Le
        Traon, has developed an online tool to help inform COVID-19 exit
        strategy planning for close to 100 countries. The project is unique
        because it delivers a method to simulate the impact of different
        measures on the spread of COVID-19 in a large number of countries around
        the world. The tool works by using machine learning techniques to
        analyse public data and deliver hypothetical projections of how
        different isolation measures will impact the spread of COVID-19. The
        intention is to make it possible for experts and governments around the
        world to analyse how diverse exit strategies will impact the spread of
        coronavirus in a six-month timeframe. Four different activity areas are
        given as variables: workplaces, outdoor activities, public
        transportation, and retail. The tool uses data that is publicly
        available, from the Google COVID-19 dataset, to create its predictions.
        A user is able to understand how policies related to each activity
        impact the spread of the disease by selecting a country and changing the
        value that represents the intensity of any given isolation measure. Le
        Traon brought together two teams at SnT to collaborate on this project.
        The researchers are releasing a beta version of the instrument for two
        reasons. First, in order to provide this tool as fast as possible for
        the benefit of the public. Second, as with any beta version, they have
        arrived at the point in the development process requires the feedback of
        users in order to refine the machine-learning algorithm fueling it.
      </p>

      <p>
        The simulator is a living project, as such it is updated gradually by
        the interdisciplinary team as they progress in their research. In the
        future, scientists plan to look at adding customisation features based
        on datasets stemming from the World Health Organisation (WHO) such as
        wearing masks and testing strategies.
      </p>
    </Content>
  </Layout>
)

export default IndexPage
