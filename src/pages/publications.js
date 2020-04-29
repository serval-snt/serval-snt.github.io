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

        <h3>Refereed Conference Articles</h3>

        <iframe title="conferences" src="https://orbilu.uni.lu/widget?query=%28
        %28author%3AYves+author%3ALE+author%3ATRAON%29+OR+
        %28author%3AAlexandre+author%3ABARTEL%29+OR+
        %28author%3AAndrey+author%3ABOYSTOV%29+OR+
        %28author%3ARenzo+author%3ADEGIOVANNI%29+OR+
        %28author%3ASankalp+author%3AGHATPANDE%29+OR+
        %28author%3AMédéric+author%3AHURIER%29+OR+
        %28author%3ALudovic+author%3AMOULINE%29+OR+
        %28author%3AJérémy+author%3AROBERT%29+OR+
        %28author%3AImen+author%3ASAYAR%29+OR+
        %28author%3AThierry+author%3ATITCHEU+author%3ACHEKAM%29+OR+
        %28author%3AKui+author%3ALIU%29+OR+
        %28author%3AMaxime+author%3ACORDY%29+OR+
        %28author%3AMike+author%3APAPADAKIS%29+OR+
        %28author%3ANikolaos+author%3AANTONIADIS%29+OR+
        %28author%3APaul-Lou+author%3ABENEDICK%29+OR+
        %28author%3AAayush+author%3AGARG%29+OR+
        %28author%3ASalah+author%3AGHAMIZI%29+OR+
        %28author%3AMartin+author%3AGUBRI%29+OR+
        %28author%3AGuillaume+author%3AHABEN%29+OR+
        %28author%3AAhmed+author%3AKHANFIR%29+OR+
        %28author%3ANiklas+author%3AKOLBE%29+OR+
        %28author%3AWei+author%3AMA%29+OR+
        %28author%3ARenaud+author%3ARWEMALIKA%29+OR+
        %28author%3AMilos+author%3AOJDANIC%29+OR+
        %28author%3AXavier+author%3ASCHMITT%29%29
        +AND+%28%28type%3A%23D00%29%29&amp;chars=100&amp;etal=3&amp;language=en&amp;data=pr&amp;format=apa&amp;css=%2Ffiles%2Fcss%2Fwl.css&amp;sort_by0=1&amp;order0=DESC&amp;sort_by1=3&amp;order1=ASC&amp;sort_by2=2&amp;order2=ASC" marginwidth="0" marginheight="0" frameborder="0" height="450" scrolling="auto" width="860"></iframe>

        <h3>Refereed Journal Articles</h3>
        
        <iframe title="journals" src="https://orbilu.uni.lu/widget?query=%28
        %28author%3AYves+author%3ALE+author%3ATRAON%29+OR+
        %28author%3AAlexandre+author%3ABARTEL%29+OR+
        %28author%3AAndrey+author%3ABOYSTOV%29+OR+
        %28author%3ARenzo+author%3ADEGIOVANNI%29+OR+
        %28author%3ASankalp+author%3AGHATPANDE%29+OR+
        %28author%3AMédéric+author%3AHURIER%29+OR+
        %28author%3ALudovic+author%3AMOULINE%29+OR+
        %28author%3AJérémy+author%3AROBERT%29+OR+
        %28author%3AImen+author%3ASAYAR%29+OR+
        %28author%3AThierry+author%3ATITCHEU+author%3ACHEKAM%29+OR+
        %28author%3AMaxime+author%3ACORDY%29+OR+
        %28author%3AMike+author%3APAPADAKIS%29+OR+
        %28author%3ANikolaos+author%3AANTONIADIS%29+OR+
        %28author%3APaul-Lou+author%3ABENEDICK%29+OR+
        %28author%3AAayush+author%3AGARG%29+OR+
        %28author%3ASalah+author%3AGHAMIZI%29+OR+
        %28author%3AMartin+author%3AGUBRI%29+OR+
        %28author%3AGuillaume+author%3AHABEN%29+OR+
        %28author%3AAhmed+author%3AKHANFIR%29+OR+
        %28author%3ANiklas+author%3AKOLBE%29+OR+
        %28author%3ARenaud+author%3ARWEMALIKA%29+OR+
        %28author%3AMilos+author%3AOJDANIC%29+OR+
        %28author%3AXavier+author%3ASCHMITT%29%29
        +AND+%28%28type%3A%23A00%29%29&amp;chars=100&amp;etal=3&amp;language=en&amp;data=pr&amp;format=apa&amp;css=%2Ffiles%2Fcss%2Fwl.css&amp;sort_by0=1&amp;order0=DESC&amp;sort_by1=3&amp;order1=ASC&amp;sort_by2=2&amp;order2=ASC" marginwidth="0" marginheight="0" frameborder="0" height="450" scrolling="auto" width="860"></iframe>

        <h3>Books and Book Chapters</h3>

        <iframe title="books" src="https://orbilu.uni.lu/widget?query=%28
        %28author%3AYves+author%3ALE+author%3ATRAON%29+OR+
        %28author%3AAlexandre+author%3ABARTEL%29+OR+
        %28author%3AAndrey+author%3ABOYSTOV%29+OR+
        %28author%3ARenzo+author%3ADEGIOVANNI%29+OR+
        %28author%3ASankalp+author%3AGHATPANDE%29+OR+
        %28author%3AMédéric+author%3AHURIER%29+OR+
        %28author%3ALudovic+author%3AMOULINE%29+OR+
        %28author%3AJérémy+author%3AROBERT%29+OR+
        %28author%3AImen+author%3ASAYAR%29+OR+
        %28author%3AThierry+author%3ATITCHEU+author%3ACHEKAM%29+OR+
        %28author%3AKui+author%3ALIU%29+OR+
        %28author%3AMaxime+author%3ACORDY%29+OR+
        %28author%3AMike+author%3APAPADAKIS%29+OR+
        %28author%3ANikolaos+author%3AANTONIADIS%29+OR+
        %28author%3APaul-Lou+author%3ABENEDICK%29+OR+
        %28author%3AAayush+author%3AGARG%29+OR+
        %28author%3ASalah+author%3AGHAMIZI%29+OR+
        %28author%3AMartin+author%3AGUBRI%29+OR+
        %28author%3AGuillaume+author%3AHABEN%29+OR+
        %28author%3AAhmed+author%3AKHANFIR%29+OR+
        %28author%3ANiklas+author%3AKOLBE%29+OR+
        %28author%3AWei+author%3AMA%29+OR+
        %28author%3ARenaud+author%3ARWEMALIKA%29+OR+
        %28author%3AMilos+author%3AOJDANIC%29+OR+
        %28author%3AXavier+author%3ASCHMITT%29%29
        +AND+%28%28type%3A%23B00%29+OR+%28type%3A%23C00%29%29&amp;chars=100&amp;etal=3&amp;language=en&amp;data=pr&amp;format=apa&amp;css=%2Ffiles%2Fcss%2Fwl.css&amp;sort_by0=1&amp;order0=DESC&amp;sort_by1=3&amp;order1=ASC&amp;sort_by2=2&amp;order2=ASC" marginwidth="0" marginheight="0" frameborder="0" height="450" scrolling="auto" width="860"></iframe>

      </Content>
    </Layout>
  )
}

export default IndexPage
