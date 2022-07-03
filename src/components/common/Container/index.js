import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`;

export const ContainerNavbar = styled.div`
  margin: 0em auto 0em auto;

  width: 100%;

  @media (min-width: 601px) {
    width: 100%;
  }

  @media (min-width: 993px) {
    width: 100%;
  }
`;
