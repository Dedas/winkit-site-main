import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, Logo } from './styles';
import { author, contact } from 'data/config';
import { contentfulSocial } from 'data/contentful-social';
import { contentfulImageDataLogo } from 'data/contentful-imagedata-logo';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Footer = ({ socialData = contentfulSocial() }, { imageData = contentfulImageDataLogo()}) => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <Logo>
          <AnchorLink href="#intro"><img src={imageData.image.file.url} /></AnchorLink>
        </Logo>
        <span className="desktop">
          © All rights are reserved | {new Date().getFullYear()} | Made by {" "}
          <a href={"mailto:" + contact.email}>{author}</a>
        </span>
        <span className="mobile">
          © All rights are reserved | {new Date().getFullYear()} <br/> Made by {" "}
          <a href={"mailto:" + contact.email}>{author}</a>
        </span>
      </Details>
      <Links>
        {socialData.edges.map(edge => {
          return (
            <a key={edge.node.name} href={edge.node.url} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${edge.node.name}`}>
              <img width="24" src={edge.node.logo.file.url} alt={edge.node.name} fill={"red"} />
            </a>
          )}
        )}  
      </Links>
    </Flex>
  </Wrapper>
);
