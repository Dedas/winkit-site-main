import React from 'react';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { contentfulSegment } from 'data/contentful-segment';

export const Skills = ({detailsData = contentfulSegment(3)}) => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={detailsData.thumbnail.file.url} alt={detailsData.thumbnailAlt} />
      </Thumbnail>
      <Details>
        <h1>{detailsData.title}</h1>
        <p>{detailsData.text.text}</p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
