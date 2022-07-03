import React from 'react';
import { Container } from 'components/common';
import { Wrapper, DetailsWrapper, Text, Thumbnail } from './styles';
import { contentfulSegment } from 'data/contentful-segment';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const About = ({aboutData = contentfulSegment(6)}) => (
  <Wrapper id="about">
    <DetailsWrapper as={Container}>
      <Text>
        <h1>{aboutData.title}</h1>
        <h3>{aboutData.subTitle}</h3>
        <div>{documentToReactComponents(JSON.parse(aboutData.content.raw))}</div>
      </Text>
      <Thumbnail>
        <img src={aboutData.thumbnail.file.url} alt={aboutData.thumbnailAlt} />
      </Thumbnail>
    </DetailsWrapper>
  </Wrapper>
);
