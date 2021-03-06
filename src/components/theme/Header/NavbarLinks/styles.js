import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right:2rem;
  font-size: 1.38316rem;
  font-weight: bold;

  a {
    color: #111111;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 5rem 1rem 4rem 1rem;
			margin: 0rem;

			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;
					border-bottom: solid thin;
					line-height: 3rem;
					text-align: center;

					color: #111111;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
