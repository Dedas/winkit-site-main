import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Details, Thumbnail, Text, AvatarExtended } from './styles';
import ContactForm from './ContactForm';
import { contentfulSegment } from 'data/contentful-segment';
import { contentfulImageDataAvatar } from 'data/contentful-imagedata-avatar';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Contact = ({contactData = contentfulSegment(5)}, {imageData = contentfulImageDataAvatar()}) => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>{contactData.title}</h1>
      <h3>{contactData.subTitle}</h3>
      <ContactForm />
    </Details>
    <Thumbnail>
      <AvatarExtended name="Andreas Winkler" size="175px" src={imageData.image.file.url} round={true} alt="Andreas Winkler" />
        <Text>
          <div>{documentToReactComponents(JSON.parse(contactData.content.raw))}</div>
        </Text> 
    </Thumbnail>
  </Wrapper>
);
