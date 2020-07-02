import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { contentfulSegment } from 'data/contentful-segment';

export const Intro = ({introData = contentfulSegment(2)}) => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>{introData.title}</h1>
        <h4>{introData.text.text}</h4>
        <Button as={AnchorLink} href="#contact">{introData.button}</Button>
      </Details>
      <Thumbnail>
        <img src={introData.thumbnail.file.url} alt={introData.thumbnailAlt} />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
