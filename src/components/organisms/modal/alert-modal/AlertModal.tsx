import { MouseEventHandler } from "react";
import styled from "styled-components";

import { Text, Button, Modal } from "@/components";
import * as mixins from '@/styles/mixins';

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
		<Modal $type='alert'>
			<Content>
				<Text type='common'>{alertMessage[type]}</Text>
				<ButtonGroup>
					<Button color='transparent' size='full' shape='square' onClick={onClick}>{activeButton[type]}</Button>
					<Button color='transparent' size='full' shape='square' onClick={handleModal}>취소하기</Button>
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