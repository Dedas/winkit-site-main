import { useStaticQuery, graphql } from 'gatsby';

export const contentfulSegment = (value) => {
  const { allContentfulSegment } = useStaticQuery(
    graphql`
    query Segment {
      allContentfulSegment(sort: {fields: order}) {
        edges {
          node {
            order
            name
            title
            subTitle
            content {
              raw
            }
            button1
            button2
            thumbnail {
              file {
                url
              }
            }
            thumbnailAlt
            background {
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
  return allContentfulSegment.edges[value].node
}

export const contentfulBackground = (value) => {
  let available = true;

  try {
    contentfulSegment(value).background.file.url
  } catch (e) {
    available = false; 
  }

  if(available) {
    return contentfulSegment(value).background.file.url
  } else {
    return null
  }
}