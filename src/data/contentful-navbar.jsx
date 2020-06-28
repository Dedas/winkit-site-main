import { useStaticQuery, graphql } from 'gatsby';

export const contentfulNavbar = () => {
  const { allContentfulNavbar } = useStaticQuery(
    graphql`
    query Navbar {
        allContentfulNavbar(filter: {title: {ne: "default"}}) {
          nodes {
            title
            logo {
              file {
                url
              }
              description
            }
          }
        }
      }
    `
  )
  return allContentfulNavbar.nodes[0]
}
