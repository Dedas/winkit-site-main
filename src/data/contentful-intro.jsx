import { useStaticQuery, graphql } from 'gatsby';

export const contentfulIntro = () => {
  const { allContentfulIntro } = useStaticQuery(
    graphql`
    query Intro {
      allContentfulIntro(filter: {title: {ne: "default"}}) {
        nodes {
          title
          text {
            text
          }
          button
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
  return allContentfulIntro.nodes[0]
}
