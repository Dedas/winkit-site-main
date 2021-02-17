import { useStaticQuery, graphql } from 'gatsby';

export const contentfulImageDataAvatar = () => {
    const { allContentfulImageData } = useStaticQuery(
      graphql`
      query ImageDataAvatar {
        allContentfulImageData(filter: {name: {eq: "Avatar"}}) {
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