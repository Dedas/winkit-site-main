import { useStaticQuery, graphql } from 'gatsby';

export const contentfulSlides = (value) => {
  const { allContentfulSlide } = useStaticQuery(
    graphql`
    query Slides {
      allContentfulSlide(sort: {fields: order, order: DESC}, filter: {slider: {elemMatch: {name: {eq: "Mentions"}}}}) {
        edges {
          node {
            reviewAuthor
            content {
              raw
            }
            reviewLink
            name
            order
            project
            projectLink
            reviewSource
            type
          }
        }
      }
    }    
    `
  )
  return allContentfulSlide.edges[value].node
}
