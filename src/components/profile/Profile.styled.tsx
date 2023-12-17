import { css, styled } from 'styled-components';

import Profile from './Profile';

const portfolioProfile = css`
	border: 1px solid blue;
`

export const ProfileLayout = styled.div<{type: Profile}>`
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

	flex: none;

	background-color: pink;
`;

export const SpanBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
	flex-shrink: 1;

	overflow: hidden;

	& span {
		overflow: hidden;

		text-overflow: ellipsis;
		white-space: nowrap;
	}
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
	gap: 0.4rem;

	& button {
		flex: none;
	}
`;