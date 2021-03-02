import React from 'react';
import { Container } from 'components/common';
import { Wrapper, DetailsWrapper, Text, Thumbnail, RichTextWrapper, StyledSlider, SlideWrapper } from './styles';
import { contentfulSegment } from 'data/contentful-segment';
import { contentfulSlides } from 'data/contentful-slider-mentions';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: false,
  adaptiveHeight: false,
  centerPadding: '50px',
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  draggable: true,
  focusOnSelect: true,
  swipe: true
};

function slideArray(nbrOfSlides) {
  var slidesData = [];

  while(nbrOfSlides >= 0) {
    slidesData.push(contentfulSlides(nbrOfSlides));
    nbrOfSlides -= 1;
  }
  return slidesData;
}

export const Mentions = ({mentionsData = contentfulSegment(8)}, {slidesData = slideArray(3)}) => (
  <Wrapper id="mentions">
    <DetailsWrapper as={Container}>
      <SlideWrapper>
        <Text>
          <h1>{mentionsData.title}</h1>
          <h3># {slidesData[0].type} of <a href={slidesData[0].projectLink}>{slidesData[0].project}</a> project</h3>
          <h4>Source: <a href={slidesData[0].reviewLink}>{slidesData[0].reviewSource}</a></h4>
        </Text>
        <StyledSlider {...settings}>
          <Text>
            {/* When I add more mentions from different sources
            <h3># {slidesData[0].type} of <a href={slidesData[0].projectLink}>{slidesData[0].project}</a> project</h3>
            */}
            <RichTextWrapper>
              {documentToReactComponents(JSON.parse(slidesData[0].content.raw))}
            </RichTextWrapper>
            <h4>/{slidesData[0].reviewAuthor}</h4>
          </Text>
          <Text>
            {/* When I add more mentions from different sources
            <h3># {slidesData[0].type} of <a href={slidesData[0].projectLink}>{slidesData[0].project}</a> project</h3>
            */}
            <RichTextWrapper>
              {documentToReactComponents(JSON.parse(slidesData[1].content.raw))}
            </RichTextWrapper>
            <h4>/{slidesData[1].reviewAuthor}</h4>
          </Text>
          <Text>
            {/* When I add more mentions from different sources
            <h3># {slidesData[0].type} of <a href={slidesData[0].projectLink}>{slidesData[0].project}</a> project</h3>
            */}
            <RichTextWrapper>
              {documentToReactComponents(JSON.parse(slidesData[2].content.raw))}
            </RichTextWrapper>
            <h4>/{slidesData[2].reviewAuthor}</h4>
          </Text>
          <Text>
            {/* When I add more mentions from different sources
            <h3># {slidesData[0].type} of <a href={slidesData[0].projectLink}>{slidesData[0].project}</a> project</h3>
            */}
            <RichTextWrapper>
              {documentToReactComponents(JSON.parse(slidesData[3].content.raw))}
            </RichTextWrapper>
            <h4>/{slidesData[3].reviewAuthor}</h4>
          </Text>
        </StyledSlider>                
      </SlideWrapper>
      <Thumbnail>
        <img src={mentionsData.thumbnail.file.url} alt={mentionsData.thumbnailAlt} />
      </Thumbnail>
    </DetailsWrapper>
  </Wrapper>
);
