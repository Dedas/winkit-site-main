import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';
import contentfulMetadata from 'data/contentful-metadata';
import contentfulMetadataSocial from 'data/contentful-social';

export const Footer = ({metaData = contentfulMetadata(), metaDataSocial = contentfulMetadataSocial()}) => (
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
      {console.log(metaDataSocial)}
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
