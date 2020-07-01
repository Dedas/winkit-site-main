import { useStaticQuery, graphql } from 'gatsby';

export const contentfulDetails = () => {
  const { allContentfulContent } = useStaticQuery(
    graphql`
    query Details {
        allContentfulContent(filter: {name: {in: "Details"}}) {
          nodes {
            title
            text {
              text
            }
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