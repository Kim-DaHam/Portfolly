import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
	from {
    transform: translateY(4%);
		opacity: 0;
  }
  to {
    transform: translateY(0%);
		opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
		opacity: 1;
  }
  to {
    transform: translateY(4%);
		opacity: 0;
  }
`;

export const Wrapper = styled.div<{$type: 'error' | 'success'}>`
	min-width: 5rem;
	max-width: fit-content;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	padding: 0.4rem 1rem 0.4rem 1rem;

	border-radius: 10rem;
	box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
	background-color: ${(props) => props.$type === 'error' ? '#FF3333' : '#009933'};

	&.openAnimation {
		animation: ${slideIn} 0.3s ease-in-out 0s 1 normal forwards;
	}

	&.closeAnimation {
		animation: ${slideOut} 0.3s ease-in-out 0s 1 normal forwards;
	}
`;