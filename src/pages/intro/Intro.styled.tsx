import { styled } from 'styled-components';

export const IntroLayout = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;

	position: absolute;
	z-index: 100;

	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

export const Introduce = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: aliceblue;
`;

export const Dvider = styled.div`
	width: 100%;
	height: 5px;
	background-color: transparent;
`