import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }

  .sticky {
    position: fixed;
  }

  .notsticky {
    position: unset;
  }
`;

export const Logo = styled.div`
  display: flex;
  
  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 65%;
    margin-bottom: 0em;
  }
`;
