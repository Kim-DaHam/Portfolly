import { css, styled } from 'styled-components';

import Profile from './Profile';

const portfolioProfile = css`
	border: 1px solid blue;
`

export const ProfileContainer = styled.div<{type: Profile}>`
	width: 100%;

	display: flex;
	gap: 0.5rem;

	${(props) => {
		if(props.type === 'Portfolio'){
			return {portfolioProfile};
		}
	}}
`;

export const Image = styled.img<{type: Profile}>`
	width: 23%;
	height: 100%;

	background-color: pink;
`;

export const SpanBox = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

export const UserName = styled.span<{type: Profile}>`
	width: 100%;

	background-color: skyblue;
`;

export const PortfolioTitle = styled.span`
	width: 100%;

	background-color: yellow;
`;

export const ButtonBox = styled.div`
	display: none;
	gap: 1rem;

	background-color: lavender;
`;