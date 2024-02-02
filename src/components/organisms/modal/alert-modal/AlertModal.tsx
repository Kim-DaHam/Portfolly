import { MouseEventHandler } from "react";
import styled from "styled-components";

import { Text, Button, Modal } from "@/components";
import * as mixins from '@/styles/mixins';
import { IComponentFactory } from "@/types";

type Alert = 'delete' | 'cancel' | 'messageRoom';

type Props = {
	type: Alert;
	onClick: () => void;
	handleModal: MouseEventHandler<HTMLElement>;
};

export const renderAlertMessage = (type: Alert)=>{
	const ComponentFactory: IComponentFactory = {
		delete: (
			<Text type='common'>정말 삭제하시겠습니까?</Text>
		),
		cancel: (
			<Text type='common'>
				정말 나가시겠습니까?
				<br/>
				지금까지 작성한 내용은 저장되지 않습니다.
			</Text>
		),
		messageRoom: (
			<Text type='common'>
				정말 나가시겠습니까?
				<br/>
				지금까지의 대화 내용은 저장되지 않습니다.
			</Text>
		),
	}

	return ComponentFactory[type];
};

const activeButton: {[key in Alert]: string} = {
	'delete': '삭제하기',
	'cancel': '나가기',
	'messageRoom': '나가기',
};

export default function AlertModal({type, onClick, handleModal}: Props) {
	return(
		<Modal $type='alert'>
			<Content>
				{renderAlertMessage(type)}
				<ButtonGroup>
					<Button color='black' size='medium' onClick={onClick}>{activeButton[type]}</Button>
					<Button color='transparent' size='medium' onClick={handleModal}>취소하기</Button>
				</ButtonGroup>
			</Content>
		</Modal>
	)
}

const Content = styled.div`
	width: 100%;
	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 2rem;

	& span {
		text-align: center;
	}
`;

const ButtonGroup = styled.div`
	width: 100%;
	${mixins.flexCenter}
	${mixins.flexRow}
	gap: 1rem;
`;