import { contentfulBackground } from 'data/contentful-segment';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0rem;
  background-image: url(${() => contentfulBackground(3)});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const DetailsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  text-align: center;
  
  @media (max-width: 960px) {
    width: 75%;
    text-align: center;
    margin-bottom: 2rem;
  }

  img {
    width: 75%;
  }
`;

