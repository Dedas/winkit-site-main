import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details, ButtonWrapper, Thumbnail } from './styles';
import { contentfulSegment } from 'data/contentful-segment';
import { contentfulImageDataCV } from 'data/contentful-imagedata-cv';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Intro = ({introData = contentfulSegment(2)}, {imageData = contentfulImageDataCV()}) => (
  <Wrapper id="intro">
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>{introData.title}</h1>
        <h4>{documentToReactComponents(JSON.parse(introData.content.raw))}</h4>
        <ButtonWrapper>
          <Button as={AnchorLink} href="#contact" offset="64">{introData.button1}</Button>
          {/*<a href={'https:' + imageData.image.file.url} download target="_blank">
            <Button>{introData.button2}</Button>
          </a>*/} 
        </ButtonWrapper>
      </Details>
      <Thumbnail>
        <img src={introData.thumbnail.file.url} alt={introData.thumbnailAlt} />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);