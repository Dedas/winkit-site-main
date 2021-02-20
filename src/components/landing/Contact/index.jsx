import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Details, Thumbnail, Text, AvatarExtended } from './styles';
import ContactForm from './ContactForm';
import { contentfulSegment } from 'data/contentful-segment';
import { contentfulImageDataAvatar } from 'data/contentful-imagedata-avatar';

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
          <h3>Andreas Winkler<br></br>Software developer</h3>
        </Text> 
    </Thumbnail>
  </Wrapper>
);
