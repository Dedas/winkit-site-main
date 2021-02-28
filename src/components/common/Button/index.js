import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: inherit;
  background: #6A95F9;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  color: white;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  &:hover {opacity: 0.8}

  &:active {
    box-shadow: 0 0px 0px 0px gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #6A95F9;
	`}
`;
