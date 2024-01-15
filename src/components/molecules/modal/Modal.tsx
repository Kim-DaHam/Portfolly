import { ReactElement } from "react";

import * as S from '@/components/molecules/modal/Modal.styled';

export type Props = {
	$type: 'alert' | 'search' | 'form';
	children: ReactElement;
}

export default function Modal({ $type, children }: Props) {
	return(
		<S.Wrapper $type={$type}>
			<S.ModalBox $type={$type}>
				{children}
			</S.ModalBox>
		</S.Wrapper>
	)
}