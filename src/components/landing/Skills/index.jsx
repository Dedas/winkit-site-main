import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { contentfulDetails } from 'data/contentful-details';

export const Skills = ({detailsData = contentfulDetails()}) => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>{detailsData.title}</h1>
        <p>{detailsData.text.text}</p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
