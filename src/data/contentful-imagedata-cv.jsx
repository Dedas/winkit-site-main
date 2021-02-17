import { useStaticQuery, graphql } from 'gatsby';

export const contentfulImageDataCV = () => {
  const { allContentfulImageData } = useStaticQuery(
    graphql`
    query ImageDataCV {
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
