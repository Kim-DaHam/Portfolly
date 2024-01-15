import { MouseEventHandler } from "react";
import { styled } from "styled-components";

import { SquareButton } from "@/components/atoms/button/Button.styled";
import Modal from "@/components/molecules/modal/Modal";
import * as mixins from '@/styles/mixins';
import { Text } from "@/styles/Text.styled";
import { SetState } from "@/types";

type Alert = 'delete' | 'cancel';

type Props = {
	type: Alert;
	onClick: () => void;
	handleModal: MouseEventHandler<HTMLElement>;
};

const alertMessage: {[key in Alert]: string} = {
	'delete': '정말 삭제하시겠습니까?',
	'cancel': '정말 나가시겠습니까? 지금까지 작성한 내용은 저장되지 않습니다.',
};

const activeButton: {[key in Alert]: string} = {
	'delete': '삭제하기',
	'cancel': '나가기',
};

export default function AlertModal({type, onClick, handleModal}: Props) {
	return(
		<Modal type='alert'>
			<Content>
				<Text size='Medium'>{alertMessage[type]}</Text>
				<ButtonGroup>
					<SquareButton color='Transparency' size='Default' onClick={onClick}>{activeButton[type]}</SquareButton>
					<SquareButton color='Transparency' size='Default' onClick={handleModal}>취소하기</SquareButton>
				</ButtonGroup>
			</Content>
		</Modal>
	)
}

const Content = styled.div`
	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 2rem;
`;

const ButtonGroup = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexRow}
	gap: 1rem;
`;