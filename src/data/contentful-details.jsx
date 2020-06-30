import { useStaticQuery, graphql } from 'gatsby';

export const contentfulDetails = () => {
  const { allContentfulDetails } = useStaticQuery(
    graphql`
    query Details {
        allContentfulDetails(filter: {title: {ne: "default"}}) {
          nodes {
            title
            text {
              text
            }
          }
        }
      } 
    `
  )
  return allContentfulDetails.nodes[0]
}