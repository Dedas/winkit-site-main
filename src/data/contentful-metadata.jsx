import { useStaticQuery, graphql } from 'gatsby';

export const contentfulMetadata = () => {
  const { allContentfulMetadata } = useStaticQuery(
    graphql`
    query Metadata {
      allContentfulMetadata(filter: {defaultTitle: {ne: "default"}}) {
        nodes {
          defaultTitle
          logo {
            file {
              url
            }
          }
          author
          url
          legalName
          defaultDescription
          googleAnalyticsID
          themeColor
          backgroundColor
          foundingDate
          city
          region
          country
          zipCode
          email
          phone
          twitter
          google
          youtube
          linkedIn
          instagram
          gitHub
        }
      }
    }    
    `
  )
  return allContentfulMetadata.nodes[0]
}
