import { useStaticQuery, graphql } from 'gatsby';

export const contentfulImageDataLogo = () => {
    const { allContentfulImageData } = useStaticQuery(
      graphql`
      query ImageDataLogo {
        allContentfulImageData(filter: {name: {eq: "Logo"}}) {
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