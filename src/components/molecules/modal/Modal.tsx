import { HTMLAttributes, ReactElement } from "react";

import * as S from '@/components/molecules/modal/Modal.styled';
import { eventStopPropagation } from "@/utils/event";

export type Props = HTMLAttributes<HTMLDivElement> & {
	$type: 'alert' | 'search' | 'form';
	children: ReactElement;
}

export default function Modal({ $type, children, ...props }: Props) {
	return(
		<S.Wrapper $type={$type} {...props}>
			<S.ModalBox $type={$type} onClick={eventStopPropagation}>
				{children}
			</S.ModalBox>
		</S.Wrapper>
	)
}