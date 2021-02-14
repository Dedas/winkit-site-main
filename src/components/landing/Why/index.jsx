import React from 'react';
import { Container } from 'components/common';
import { Wrapper, DetailsWrapper, Text, Thumbnail } from './styles';
import { contentfulSegment } from 'data/contentful-segment';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Why = ({whyData = contentfulSegment(4)}) => (
  <Wrapper id="about">
    <DetailsWrapper as={Container}>
    <Thumbnail>
        <img src={whyData.thumbnail.file.url} alt={whyData.thumbnailAlt} />
    </Thumbnail>
    <Text>
      <h1>{whyData.title}</h1>
      <p>{documentToReactComponents(JSON.parse(whyData.content.raw))}</p>
    </Text>
    </DetailsWrapper>
  </Wrapper>
);
