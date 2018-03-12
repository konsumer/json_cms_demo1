import React from 'react'
import { Container } from 'reactstrap'

export default ({data}) => (
  <div>
    <Container>
      <ul>
        {data.allNewsJson.edges.map(e => (
          <li>
            <img src={`/files/${e.node.horz_image}`} />
            <h3>{e.node.title}</h3>
            <p>{e.node.blurb}</p>
            <a href={e.node.link_href}>{e.node.link_title}</a>
            <img src={`/files/${e.node.site_image}`} />
          </li>
      ))}
      </ul>
    </Container>
  </div>
)

export const newPageQuery = graphql`
query NewsPage {
  allNewsJson (sort:{order:DESC, fields:priority}) {
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
