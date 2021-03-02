import { contentfulBackground } from 'data/contentful-segment';
import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
  padding: 2rem 0rem;
  /* background-image: url(${() => contentfulBackground(11)}); */
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const DetailsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
`;

export const SlideWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  width: 50%;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const StyledSlider = styled(Slider)`
  /* Remove accessibility black outline */
  *,*:focus,*:hover{
    outline:none;
  }

  h3 {
    text-align: left;
  }

  h4 {
    text-align: left;
    margin-bottom: 1.45rem;
  }


  p {
    text-align: left;
    margin-bottom: 0.5rem;
  }
`;

export const RichTextWrapper = styled.div`
  margin-bottom: 1.45rem;
`;

export const Text = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 1.45rem;
    font-size: 26pt;
  }

  p {
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 1.3;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 960px) {
    width: 200px;
    text-align: center;
    margin-bottom: 2rem;
  }

  img {
    width: 300px;
  }
`;

