import React from 'react';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { contentfulDetails } from 'data/contentful-details';

export const Skills = ({detailsData = contentfulDetails()}) => (
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
