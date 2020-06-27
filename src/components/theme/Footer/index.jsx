import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import contentfulMetadata from 'data/contentful-metadata';
import { contentfulSocial } from 'data/contentful-social';

export const Footer = ({ metaData = contentfulMetadata(), socialData = contentfulSocial(), temp = socialData.length }) => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{metaData.defaultTitle}</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made by {" "}
          <a href="winkit.se">
            {metaData.legalName}
          </a>
        </span>
      </Details>
      <Links>
        {socialData.edges.map(edge => {
          return (
            <a key={edge.node.name} href={edge.node.url} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${edge.node.name}`}>
              <img width="24" src={edge.node.logo.file.url} alt={edge.node.name} />
            </a>
          )}
        )}  
      </Links>
    </Flex>
  </Wrapper>
);
