import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
`;

export const Notice = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: right;
	align-items: center;

	padding-top: 0.5rem;
	padding-right: 0.5rem;
`

export const SearchFilterSection = styled.div`
	height: fit-content;
	padding: 1.5rem 1rem;
	border-bottom: 2px solid #f5f5f5;
`;

export const Form = styled.form`
	${mixins.fullWidthHeight}
	${mixins.flexCenter}
	flex-wrap: nowrap;
	gap: 1rem;
`;

export const DateSelector = styled.div`
	flex: none;
	& input {
		transition: background-color 0.2s ease;
		&:hover{
			background-color: #f5f5f5;
		}
	}
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

export const ContentSection = styled.div`
	width: 100%;
	height: 38rem;

	padding: 1rem;
	margin-top: 1rem;

	border-radius: 1rem;
	background-color: #f0f0f0;
`;

export const List = styled.ul`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
	gap: 0.8rem;
`;