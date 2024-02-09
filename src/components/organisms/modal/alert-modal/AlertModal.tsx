import { MouseEventHandler } from "react";
import styled from "styled-components";

import * as mixins from '@/styles/mixins';

import type { IComponentFactory, AlertModal } from "@/types";

import { Text, Button, Modal } from "@/components";

type Props = {
	type: AlertModal;
	$modalState: boolean;
	handleModal: MouseEventHandler<HTMLElement>;
	onConfirm: () => void;
};

export const renderAlertMessage = (type: AlertModal)=>{
	const ComponentFactory: IComponentFactory = {
		delete: (
			<Text size='bodyMedium'>정말 삭제하시겠습니까?</Text>
		),
		cancel: (
			<Text size='bodyMedium'>
				정말 나가시겠습니까?
				<br/>
				지금까지 작성한 내용은 저장되지 않습니다.
			</Text>
		),
		messageRoom: (
			<Text size='bodyMedium'>
				정말 나가시겠습니까?
				<br/>
				지금까지의 대화 내용은 저장되지 않습니다.
			</Text>
		),
		error: (
			<Text size='bodyMedium'>
				페이지를 불러올 수 없습니다.
				<br/>
				잠시 후 다시 접근해주세요.
			</Text>
		),
	}

	return ComponentFactory[type];
};

const activeButton: {[key in AlertModal]: string} = {
	'delete': '삭제하기',
	'cancel': '나가기',
	'messageRoom': '나가기',
	'error': '확인',
};

export default function AlertModal({type, $modalState, handleModal, onConfirm}: Props) {
	return(
		<Modal $type='alert' $modalState={$modalState}>
			<Content>
				{renderAlertMessage(type)}
				<ButtonGroup>
					<Button
						color='black'
						size='medium'
						onClick={onConfirm}
					>
						{activeButton[type]}
					</Button>
					<Button
						color='transparent'
						size='medium'
						onClick={handleModal}
					>
						취소하기
					</Button>
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

	padding: 1rem;

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