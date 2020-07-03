import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import {
  defaultTitle,
  author,
  contact,
} from 'data/config';
import { contentfulSocial } from 'data/contentful-social';

export const Footer = ({ socialData = contentfulSocial() }) => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{defaultTitle}</h2>
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
              <img width="24" src={edge.node.logo.file.url} alt={edge.node.name} />
            </a>
          )}
        )}  
      </Links>
    </Flex>
  </Wrapper>
);
