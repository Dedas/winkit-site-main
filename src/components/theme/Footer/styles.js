import { contentfulBackground } from 'data/contentful-segment';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;

  background-image: url(${() => contentfulBackground(7)});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  @media (max-width: 960px) {
    height: 100%;
    width: 100%;
    justify-content: center;
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

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  .mobile {
    display: none;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
    .desktop {
      display: none;
    }

    .mobile {
      display:block;
    }
  }

  a {
    color: #6b63ff;
  }

  a:visited {
    color: #6b63ff;
  }
`;
