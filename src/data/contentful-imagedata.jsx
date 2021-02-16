import { useStaticQuery, graphql } from 'gatsby';

export const contentfulImageData = () => {
  const { allContentfulImageData } = useStaticQuery(
    graphql`
    query ImageData {
      allContentfulImageData(filter: {name: {eq: "CV"}}) {
        edges {
          node {
            name
            image {
              file {
                url
              }
            }
          }
        }
      }
    } 
    `
  )
  return allContentfulImageData.edges[0].node
}
