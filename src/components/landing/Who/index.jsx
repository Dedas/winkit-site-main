import React from 'react';
import { Container } from 'components/common';
import { Wrapper, DetailsWrapper, Text, Thumbnail } from './styles';
import { contentfulSegment } from 'data/contentful-segment';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Who = ({whoData = contentfulSegment(3)}) => (
  <Wrapper id="about">
    <DetailsWrapper as={Container}>
      <Text>
        <h1>{whoData.title}</h1>
        <div>{documentToReactComponents(JSON.parse(whoData.content.raw))}</div>
      </Text>
      <Thumbnail>
        <img src={whoData.thumbnail.file.url} alt={whoData.thumbnailAlt} />
      </Thumbnail>
    </DetailsWrapper>
  </Wrapper>
);
