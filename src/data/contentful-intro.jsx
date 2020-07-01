import { useStaticQuery, graphql } from 'gatsby';

export const contentfulIntro = () => {
  const { allContentfulContent } = useStaticQuery(
    graphql`
    query Intro {
      allContentfulContent(filter: {name: {in: "Intro"}}) {
        nodes {
          title
          text {
            text
          }
          button
          thumbnail {
            svg {
              content
            }
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
