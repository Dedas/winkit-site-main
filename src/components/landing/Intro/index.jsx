import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import contentfulIntro from 'data/contentful-metadata'

export const Intro = ({introData = contentfulIntro()}) => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
      <StaticQuery query={graphql`
query Test {
  contentfulMetadata {
    defaultTitle
  }
}
      `}
      render={(data) => {
        const { defaultTitle } = data.contentfulMetadata;
        return (
          <div justifyContent="center">
            <ReactMarkdown
              source={introData}
              />
            <h1>Hi There!</h1>
            <h4>I’m Dedas and I’m a JAMStack engineer!</h4>

            <Button as={AnchorLink} href="#contact">
              Hire me
            </Button>
          </div>
        );
      }}
      />
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
