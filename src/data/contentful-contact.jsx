import { useStaticQuery, graphql } from 'gatsby';

export const contentfulContact = () => {
  const { allContentfulContent } = useStaticQuery(
    graphql`
    query Contact {
      allContentfulContent(filter: {name: {in: "Contact"}}) {
        nodes {
          thumbnail {
            file {
              url
            }
          }
          thumbnailAlt
        }
      }
    }   
    `
  )
  return allContentfulContent.nodes[0]
}
