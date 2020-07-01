import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';
import { contentfulContact } from 'data/contentful-contact';

export const Contact = ({contactData = contentfulContact()}) => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contactData.thumbnail.file.url} alt={contactData.thumbnailAlt} />
    </Thumbnail>
  </Wrapper>
);
