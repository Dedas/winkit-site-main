import { contentfulBackground } from 'data/contentful-segment';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url(${() => contentfulBackground(1)});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  padding: 1rem 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  margin-left: 1rem;

  @media (max-width: 960px) {
    height: 100%;
    width: 100%;
  }

  img {
    height 100%;
    width: 120px;
    margin-bottom: 0em;
  }

  a {
    display: inline-flex;
  }
`;
