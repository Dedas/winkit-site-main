import { useStaticQuery, graphql } from 'gatsby';

export const contentfulSocial = () => {
  const { allContentfulSocial } = useStaticQuery(
    graphql`
    query SocialData {
      allContentfulSocial(filter: {name: {ne: "default"}}, sort: {fields: order}) {
        edges {
          node {
            name
            url
            logo {
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
  return allContentfulSocial
}
