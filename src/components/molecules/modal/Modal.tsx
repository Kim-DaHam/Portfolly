import { ReactElement } from "react";
import { styled } from "styled-components";

import * as mixins from '@/styles/mixins';
import { modalSize } from "@/styles/token";

export type Modal = 'alert' | 'search' | 'form';

type Props = {
	type: Modal;
	children: ReactElement;
}

export default function Modal({ type, children }: Props) {
	return(
		<ModalLayout $type={type}>
			<ModalBox $type={type}>
				{children}
			</ModalBox>
		</ModalLayout>
	)
}

const ModalLayout = styled.div<{$type: Modal}>`
	width: 100vw;
	height: 100vh;

	${mixins.flexCenter};

	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;

	background-color: ${(props) => props.$type !== 'alert' ? '#0000007e' : 'transparent'};
`;

const ModalBox = styled.div<{$type: Modal}>`
	width: ${(props) => modalSize[props.$type].width};
	height: ${(props) => modalSize[props.$type].height};

	${mixins.flexColumn}
	gap: 2rem;

	padding: 1.7rem 2rem 1.7rem 2rem;

	border-radius: 16px;
	background-color: white;
`;