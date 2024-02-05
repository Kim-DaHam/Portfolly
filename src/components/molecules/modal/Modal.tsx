import { ReactElement, useEffect, useState } from "react";

import * as S from '@/components/molecules/modal/Modal.styled';
import { eventStopPropagation, moveScrollY, stopScrollY } from "@/utils/event";

export type Modal = 'alert' | 'search' | 'form';

export type Props = {
	$type: Modal;
	$modalState: boolean;
	onClose: React.MouseEventHandler<HTMLElement>;
	children: ReactElement;
}

export default function Modal({ $type, $modalState, onClose, children }: Props) {
	const [isModalOpen, setIsModalOpen] = useState($modalState);

	useEffect(() => {
    if($modalState) {
      setIsModalOpen(true);
			stopScrollY();
			return;
    }

		const modalTimer = setTimeout(() => {
			setIsModalOpen(false);
			moveScrollY();
		}, 400);
    return () => {
			clearTimeout(modalTimer);
    };
  }, [$modalState]);

	if(!isModalOpen) return null;

	return(
		<S.Wrapper
			$type={$type}
			$modalState={$modalState}
			onClick={onClose}
		>
			<S.ModalBox
				$type={$type}
				$modalState={$modalState}
				onClick={eventStopPropagation}
			>
				{children}
			</S.ModalBox>
		</S.Wrapper>
	)
}