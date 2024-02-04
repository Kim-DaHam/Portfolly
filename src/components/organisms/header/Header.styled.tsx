import styled from 'styled-components';

import { ButtonStyle } from '@/components/atoms/button/Button.styled';

export const HEADER_HEIGHT = '4.498rem';

export const Wrapper = styled.header`
	width: 100vw;
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

	& .profile-menu {
		padding: 0 0.875rem 0 0.375rem;
	}
`

export const Logo = styled.a`
	cursor: pointer;
`;