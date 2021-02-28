import { contentfulBackground } from 'data/contentful-segment';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 2rem;
  /*background-image: url(${() => contentfulBackground(2)});*/
  /*background-image: url(test.svg);*/
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    background-size: cover;
    background-position: top;
  }
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 64pt;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h1:nth-child(1) {
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-size: 24pt;
    font-weight: bold;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-top: 1.1rem;
`;

export const Thumbnail = styled.div`
  flex: 1;
  margin-top: 2rem;

  @media (max-width: 960px) {
    text-align: center;
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
