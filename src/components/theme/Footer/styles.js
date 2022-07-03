import { contentfulBackground } from 'data/contentful-segment';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 14rem 0 4rem 0;

  /*background-image: url(${() => contentfulBackground(7)});*/
  background-image: url("drawing.svg");
  background-size: contain;
  background-position: bottom;
  background-repeat: repeat-x;

  @media (max-width: 680px) {
    background-size: cover;
    padding: 16rem 0 4rem 0;
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

  @media (max-width: 680px) {
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
      /* Changes color of SVG to black */
      /*filter: invert(0%) sepia(5%) saturate(100%) hue-rotate(317deg) brightness(0%) contrast(87%);*/
      mix-blend-mode: color-dodge;
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

  a {
    color: white;
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
`;
