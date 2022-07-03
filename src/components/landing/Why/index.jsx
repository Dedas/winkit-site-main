import React from 'react';
import { Container } from 'components/common';
import { Wrapper, DetailsWrapper, Text, Thumbnail } from './styles';
import { contentfulSegment } from 'data/contentful-segment';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Why = ({whyData = contentfulSegment(4)}) => (
  <Wrapper id="why">
    <DetailsWrapper as={Container}>
      <Text>
        <h1>{whyData.title}</h1>
        <h3>{whyData.subTitle}</h3>
        <div>{documentToReactComponents(JSON.parse(whyData.content.raw))}</div>
      </Text>
      <Thumbnail>
          <img src={whyData.thumbnail.file.url} alt={whyData.thumbnailAlt} />
      </Thumbnail>
    </DetailsWrapper>
  </Wrapper>
);
