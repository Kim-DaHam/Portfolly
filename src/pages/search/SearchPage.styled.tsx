import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexCenter}
	${mixins.flexColumn}

	padding-top: 7rem;
`;

export const TitleSection = styled.section`
	width: 100%;
	height: fit-content;

	${mixins.flexColumn}
	gap: 1rem;

	padding: 1rem 0 1.5rem 0;

	& span {
		font-weight: 600;
	}
`;

export const PortfolioSection = styled.section`
	width: 100%;
	padding-top: 1.5rem;
`;

export const Box = styled.div`
	${mixins.flexRow}
	align-items: center;
	gap: 1rem;
`;

export const Input = styled.input`
	height: 2.75rem;
	padding: 0 1rem;
	font-family: 'NotoSansTTFMedium';
	border: 1px solid #f0f0f0;
	border-radius: 9999px;
  background-color: white;
	font-size: 1rem;
`;

export const FilterItem = styled.div`
	height: 2.75rem;
	${mixins.flexCenter}

	color: white;
	border-radius: 50%;
	background-color: black;

	&:hover {
		& > svg {
			visibility: visible;
		}
	}
`;

export const Icon = styled.div`
		padding: 0.5rem;
		border-radius: 50%;
		background-color: white;

		& > svg {
		visibility: hidden;
	}
`;