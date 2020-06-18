import { useStaticQuery, graphql } from 'gatsby';

const contentfulSocial = () => {
  const { allContentfulSocial } = useStaticQuery(
    graphql`
    query allContentfulSocial {
      allContentfulSocial(filter: {order: {ne: 0}}) {
        nodes {
          order
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
    `
  )
  return allContentfulSocial.nodes[0]
}

export default contentfulSocial