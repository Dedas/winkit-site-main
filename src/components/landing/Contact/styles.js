import { contentfulBackground } from 'data/contentful-segment';
import styled from 'styled-components';
import Avatar from 'react-avatar';

export const Wrapper = styled.div`
  padding: 6rem 0rem 6rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  background-image: url(${() => contentfulBackground(4)});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 2rem 0rem 0rem 0rem;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
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
    width: 75%;
    text-align: center;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  h4 {
    font-weight: normal;
  }

  img {
    width: 65%;
  }
`;

export const AvatarExtended = styled(Avatar)`
  margin-bottom: 1rem;

  @media (max-width: 960px) {
    width: 140px !important;
    height: 140px !important;
    margin-bottom: 0.5rem;
  }

`;
