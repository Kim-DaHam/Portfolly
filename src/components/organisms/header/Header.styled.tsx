import { styled } from 'styled-components';

export const HEADER_HEIGHT = '3.5rem';

export const HeaderContainer = styled.header`
	width: 100%;
	height: ${HEADER_HEIGHT};

	display: grid;
	grid-template-columns: 0.1fr 0.75fr 0.8fr 1fr;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;

	position: fixed;
	z-index: 999;
	top: 0;

	padding: 0.3rem 2rem 0.3rem 2rem;

	background-color: white;
`;

export const ButtonGroup = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 0.9rem;
`

export const LogoBox = styled.a`
	cursor: pointer;
`;