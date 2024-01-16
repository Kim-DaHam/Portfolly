import styled from "styled-components";

import { Props } from "@/components/molecules/modal/Modal";
import * as mixins from '@/styles/mixins';
import { types } from "@/styles/modal";

export const Wrapper = styled.div<Props>`
	width: 100vw;
	height: 100vh;

	${mixins.flexCenter};

	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;

	background-color: ${(props) => props.$type !== 'alert' ? '#0000007e' : 'transparent'};
`;

export const ModalBox = styled.div<Props>`
	${props => (types[props.$type])};

	${mixins.flexColumn}
	gap: 2rem;

	padding: 1.7rem 2rem 1.7rem 2rem;

	border-radius: 16px;
	background-color: white;
`;