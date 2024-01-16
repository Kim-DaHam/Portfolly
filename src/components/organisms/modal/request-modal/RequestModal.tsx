import { FiX as XIcon } from "react-icons/fi";

import * as S from "./RequestModal.styled";

import { Text, Button, Modal } from "@/components";
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
					<Text type='titleSmall'>Title</Text>
					<Text type='small'>Date</Text>
				</S.Box>

				<S.Form>
					<S.Box>
						<Text type='label'>전문가 정보</Text>
						<S.Box>
							{/* <Profile type='Default'/> */}
							<Text type='label'>이름</Text>
							<Text type='common'>홍길동</Text>
							<Text type='label'>연락처</Text>
							<Text type='common'>010-0000-0000</Text>
						</S.Box>
					</S.Box>

					<S.Box>
						<Text type='label'>의뢰 내용</Text>
						<Text type='common'>내용</Text>
					</S.Box>

					<S.Box>
						<Text type='label'>마감 기한</Text>
						<Text type='common'>내용</Text>
					</S.Box>

					<S.Box>
						<Text type='label'>비용</Text>
						<Text type='common'>내용</Text>
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