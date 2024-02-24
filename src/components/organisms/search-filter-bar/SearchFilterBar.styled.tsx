import styled from "styled-components";

import * as mixins from '@/styles/mixins';

import { ButtonStyle } from "@/components";

export const Wrapper = styled.div`
	width: 100%;

	display: flex;
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

export const FilterItem = styled(ButtonStyle)`
	${mixins.flexCenter}
	gap: 0.5rem;
`;

export const Icon = styled.div`
	width: 1rem;
	height: 1rem;

	${mixins.flexCenter}
	border-radius: 50%;
	background-color: white;

	& > svg {
		width: 0.7rem;
		color: black;
	}
`;