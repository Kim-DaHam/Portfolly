import { FiX as XIcon } from "react-icons/fi";

import * as S from "./RequestModal.styled";

import { Button, Modal } from "@/components";
import { Heading, Label, Text } from "@/styles/Text.styled";
import { SetState } from "@/types";

type Props = {
	handleModal: SetState<boolean>;
}

export default function RequestModal({handleModal}: Props) {

	const closeModal = ()=> {
		handleModal(prev=>!prev);
	}

	return(
		<Modal $type='form'>
			<S.Box>
			<S.ButtonBox onClick={closeModal}>
				<XIcon size={28}/>
			</S.ButtonBox>

			<S.Content>
				<S.Box>
					<Heading size='Small'>Title</Heading>
					<Text size='Small'>Date</Text>
				</S.Box>

				<S.Form>
					<S.Box>
						<Label>전문가 정보</Label>
						<S.Box>
							{/* <Profile type='Default'/> */}
							<Label>이름</Label>
							<Text size='Medium'>홍길동</Text>
							<Label>연락처</Label>
							<Text size='Medium'>010-0000-0000</Text>
						</S.Box>
					</S.Box>

					<S.Box>
						<Label>의뢰 내용</Label>
						<Text size='Medium'>내용</Text>
					</S.Box>

					<S.Box>
						<Label>마감 기한</Label>
						<Text size='Medium'>내용</Text>
					</S.Box>

					<S.Box>
						<Label>비용</Label>
						<Text size='Medium'>내용</Text>
					</S.Box>
			</S.Form>
			</S.Content>

			<S.ButtonGroup>
				<Button color='black' size='medium' shape='square'>주문 취소</Button>
			</S.ButtonGroup>
			</S.Box>
		</Modal>
	)
}