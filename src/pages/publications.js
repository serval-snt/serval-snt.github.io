import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Publications" />
      <Content>
        <h1>Publications</h1>
        <h3>Refereed Journal Articles</h3>
        <iframe src="https://orbilu.uni.lu/widget?query=%28
        %28author%3AYves LE TRAON%29+OR+
        %28author%3AAlexandre BARTEL%29+OR+
        %28author%3AAndrey BOYSTOV%29+OR+
        %28author%3ARenzo DEGIOVANNI%29+OR+
        %28author%3ASankalp GHATPANDE%29+OR+
        %28author%3AMédéric HURIER%29+OR+
        %28author%3ALudovic MOULINE%29+OR+
        %28author%3AJérémy ROBERT%29+OR+
        %28author%3AImen SAYAR%29+OR+
        %28author%3AThierry TITCHEU CHEKAM%29+OR+
        %28author%3AKui LIU%29+OR+
        %28author%3AMaxime CORDY%29+OR+
        %28author%3AMike PAPADAKIS%29+OR+
        %28author%3ANikolaos ANTONIADIS%29+OR+
        %28author%3APaul-Lou BENEDICK%29+OR+
        %28author%3AAayush GARG%29+OR+
        %28author%3ASalah GHAMIZI%29+OR+
        %28author%3AMartin GUBRI%29+OR+
        %28author%3AGuillaume HABEN%29+OR+
        %28author%3AAhmed KHANFIR%29+OR+
        %28author%3ANiklas KOLBE%29+OR+
        %28author%3AWei MA%29+OR+
        %28author%3ARenaud RWEMALIKA%29+OR+
        %28author%3AMilos OJDANIC%29+OR+
        %28author%3AXavier SCHMITT%29%29
        +AND+%28%28type%3A%23A00%29%29&amp;chars=100&amp;etal=3&amp;language=en&amp;data=pr&amp;format=apa&amp;css=%2Ffiles%2Fcss%2Fwl.css&amp;sort_by0=1&amp;order0=DESC&amp;sort_by1=3&amp;order1=ASC&amp;sort_by2=2&amp;order2=ASC" marginwidth="0" marginheight="0" frameborder="0" height="450" scrolling="auto" width="860"></iframe>

        <h3>Refereed Conference Articles</h3>

        <iframe src="https://orbilu.uni.lu/widget?query=%28
        %28author%3AYves LE TRAON%29+OR+
        %28author%3AAlexandre BARTEL%29+OR+
        %28author%3AAndrey BOYSTOV%29+OR+
        %28author%3ARenzo DEGIOVANNI%29+OR+
        %28author%3ASankalp GHATPANDE%29+OR+
        %28author%3AMédéric HURIER%29+OR+
        %28author%3ALudovic MOULINE%29+OR+
        %28author%3AJérémy ROBERT%29+OR+
        %28author%3AImen SAYAR%29+OR+
        %28author%3AThierry TITCHEU CHEKAM%29+OR+
        %28author%3AKui LIU%29+OR+
        %28author%3AMaxime CORDY%29+OR+
        %28author%3AMike PAPADAKIS%29+OR+
        %28author%3ANikolaos ANTONIADIS%29+OR+
        %28author%3APaul-Lou BENEDICK%29+OR+
        %28author%3AAayush GARG%29+OR+
        %28author%3ASalah GHAMIZI%29+OR+
        %28author%3AMartin GUBRI%29+OR+
        %28author%3AGuillaume HABEN%29+OR+
        %28author%3AAhmed KHANFIR%29+OR+
        %28author%3ANiklas KOLBE%29+OR+
        %28author%3AWei MA%29+OR+
        %28author%3ARenaud RWEMALIKA%29+OR+
        %28author%3AMilos OJDANIC%29+OR+
        %28author%3AXavier SCHMITT%29%29
        +AND+%28%28type%3A%23D00%29%29&amp;chars=100&amp;etal=3&amp;language=en&amp;data=pr&amp;format=apa&amp;css=%2Ffiles%2Fcss%2Fwl.css&amp;sort_by0=1&amp;order0=DESC&amp;sort_by1=3&amp;order1=ASC&amp;sort_by2=2&amp;order2=ASC" marginwidth="0" marginheight="0" frameborder="0" height="450" scrolling="auto" width="860"></iframe>

        <h3>Books and Book Chapters</h3>

        <iframe src="https://orbilu.uni.lu/widget?query=%28
        %28author%3AYves LE TRAON%29+OR+
        %28author%3AAlexandre BARTEL%29+OR+
        %28author%3AAndrey BOYSTOV%29+OR+
        %28author%3ARenzo DEGIOVANNI%29+OR+
        %28author%3ASankalp GHATPANDE%29+OR+
        %28author%3AMédéric HURIER%29+OR+
        %28author%3ALudovic MOULINE%29+OR+
        %28author%3AJérémy ROBERT%29+OR+
        %28author%3AImen SAYAR%29+OR+
        %28author%3AThierry TITCHEU CHEKAM%29+OR+
        %28author%3AKui LIU%29+OR+
        %28author%3AMaxime CORDY%29+OR+
        %28author%3AMike PAPADAKIS%29+OR+
        %28author%3ANikolaos ANTONIADIS%29+OR+
        %28author%3APaul-Lou BENEDICK%29+OR+
        %28author%3AAayush GARG%29+OR+
        %28author%3ASalah GHAMIZI%29+OR+
        %28author%3AMartin GUBRI%29+OR+
        %28author%3AGuillaume HABEN%29+OR+
        %28author%3AAhmed KHANFIR%29+OR+
        %28author%3ANiklas KOLBE%29+OR+
        %28author%3AWei MA%29+OR+
        %28author%3ARenaud RWEMALIKA%29+OR+
        %28author%3AMilos OJDANIC%29+OR+
        %28author%3AXavier SCHMITT%29%29
        +AND+%28%28type%3A%23B00%29+OR+%28type%3A%23C00%29%29&amp;chars=100&amp;etal=3&amp;language=en&amp;data=pr&amp;format=apa&amp;css=%2Ffiles%2Fcss%2Fwl.css&amp;sort_by0=1&amp;order0=DESC&amp;sort_by1=3&amp;order1=ASC&amp;sort_by2=2&amp;order2=ASC" marginwidth="0" marginheight="0" frameborder="0" height="450" scrolling="auto" width="860"></iframe>

      </Content>
    </Layout>
  )
}

export default IndexPage
