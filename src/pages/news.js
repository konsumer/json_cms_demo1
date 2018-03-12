import React from 'react'
import { Container } from 'reactstrap'

export default ({data}) => (
  <div>
    <Container>
      <ul>
        {data.allNewsJson.edges.map(e => (
          <li>
            <h3>{e.node.title}</h3>
            <p>{e.node.blurb}</p>
            <a href={e.node.link_href}>{e.node.link_title}</a>
            <img src={e.node.horz_image} />
            <img src={e.node.site_image} />
          </li>
      ))}
      </ul>
    </Container>
  </div>
)

export const newPageQuery = graphql`
query NewsPage {
  allNewsJson{
    edges{
      node{
        title
        date
        link_title
        link_href
        blurb
        horz_image
        site_image
      }
    }
  }
}
`
