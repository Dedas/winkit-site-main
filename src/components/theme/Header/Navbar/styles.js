import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }
`;

export const Logo = styled.div`
  display: flex;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 60%;
    margin-bottom: 0px;
  }
`;
