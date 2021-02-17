import { contentfulBackground } from 'data/contentful-segment';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0rem;
  background-image: url(${() => contentfulBackground(4)});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const DetailsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    padding: 0rem;
  }
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
    color: #212121;
  }

  h3 {
    color: #474747;
  }

  p {
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 1.3;
    color: #474747;
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
    width: 55%;
  }
`;