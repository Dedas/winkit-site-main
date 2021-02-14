import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Details, Thumbnail, Text } from './styles';
import ContactForm from './ContactForm';
import { contentfulSegment } from 'data/contentful-segment';

export const Contact = ({contactData = contentfulSegment(5)}) => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>{contactData.title}</h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contactData.thumbnail.file.url} alt={contactData.thumbnailAlt} />
    </Thumbnail>
  </Wrapper>
);
