import { contentfulBackground } from 'data/contentful-segment';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 4rem;
  background-image: url(${() => contentfulBackground(4)});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 75%;
    text-align: center;
    margin-bottom: 2rem;
  }

  img {
    width: 75%;
  }
`;
