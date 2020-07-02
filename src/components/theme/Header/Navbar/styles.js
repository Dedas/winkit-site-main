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

  a {
    color: #212121;
  }
`;

export const Logo = styled.div`
  display: flex;
  margin-left: 1rem;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 65%;
    margin-bottom: 0em;
  }
`;
