import { MouseEventHandler, useState } from "react";
import { FiX as XIcon } from "react-icons/fi";
import { useSelector } from "react-redux";

import * as S from "./CommissionModal.styled";

import { Text, Button, Modal, Profile } from "@/components";
import { useStopScrollY } from "@/hooks";
import { authority } from "@/redux/loginSlice";

type Props = {
	commission: any;
	handleModal: MouseEventHandler<HTMLElement>;
}

export default function RequestModal({ commission, handleModal }: Props) {
	const [isEditMode, setIsEditMode] = useState(false);
	console.log(commission)

	const auth = useSelector(authority);

	useStopScrollY();

	return(
		<Modal $type='form' onClick={handleModal}>
			<S.Box>
			<S.ButtonBox onClick={handleModal}>
				<XIcon size={28}/>
			</S.ButtonBox>

			<S.Content>
				<S.Form>
					<S.Box>
						{ isEditMode ?
							<S.TextInput value={commission.details.title}/>
							:
							<Text type='titleSmall'>{commission.details.title}</Text>
						}
						<Text type='small'>{commission.createdAt}</Text>
					</S.Box>

					<S.Box>
						<Text type='label'>관련 포트폴리오</Text>
							<Profile type='portfolio' user={commission.portfolio}/>
					</S.Box>

					<S.Box>
						<Text type='label'>전문가 정보</Text>
						<S.Box>
							<Profile type='default' user={commission.expert}/>
							<Text type='label'>이름</Text>
							<Text type='common'>{commission.expert.name}</Text>
							<Text type='label'>연락처</Text>
							<Text type='common'>{commission.expert.phone}</Text>
						</S.Box>
					</S.Box>

					<S.Box>
						<Text type='label'>의뢰 내용</Text>
						{ isEditMode ?
							<S.TextArea value={commission.details.content}/>
							:
							<Text type='common'>{commission.details.content}</Text>
						}
					</S.Box>

					<S.Box>
						<Text type='label'>마감 기한</Text>
						{ isEditMode ?
							<input type='date' value={commission.details.deadline} />
							:
							<Text type='common'>{commission.details.deadline}</Text>
						}
					</S.Box>

					<S.Box>
						<Text type='label'>비용</Text>
						{ isEditMode ?
							<S.Input  value={commission.details.cost}/>
							:
							<Text type='common'>{commission.details.cost}</Text>
						}
					</S.Box>
			</S.Form>
			</S.Content>

			<S.ButtonGroup>
				{ auth === 'expert' && !isEditMode ?
					<Button color='black' size='medium' shape='square' onClick={() => setIsEditMode(prev=>!prev)}>의뢰 수정</Button>
					:
					<Button color='black' size='medium' shape='square'>저장하기</Button>
				}
				{ auth === 'client' &&
					<Button color='black' size='medium' shape='square'>주문 취소</Button>
				}
				{ !isEditMode &&
					<Button color='black' size='medium' shape='square' onClick={handleModal}>닫기</Button>
				}
			</S.ButtonGroup>
			</S.Box>
		</Modal>
	)
}