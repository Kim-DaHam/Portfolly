import { FiX as XIcon } from "react-icons/fi";

import { ButtonGroup, CloseButton, ContentSection, ModalBox, RequestForm, RequestModalLayout, TitleBox } from "./RequestModal.styled";

import { Button } from "@/components/atoms/index";
import { FlexColumnBox } from "@/styles/Container.styled";
import { Heading, Label, Text } from "@/styles/Text.styled";
import { SetState } from "@/types";
import { eventStopPropagation } from "@/utils/event";

type Props = {
	handleModal: SetState<boolean>;
}

export default function RequestModal({handleModal}: Props) {

	const closeModal = ()=> {
		handleModal(prev=>!prev);
	}

	return(
		<RequestModalLayout onClick={closeModal}>
			<ModalBox onClick={eventStopPropagation}>
				<CloseButton onClick={closeModal}>
					<XIcon size={28}/>
				</CloseButton>

				<ContentSection>
					<TitleBox>
						<Heading size='Small'>Title</Heading>
						<Text size='Small'>Date</Text>
					</TitleBox>

					<RequestForm>
						<FlexColumnBox gap='1rem'>
							<Label>전문가 정보</Label>
							<FlexColumnBox gap='0.5rem'>
								{/* <Profile type='Default'/> */}
								<Label>이름</Label>
								<Text size='Medium'>홍길동</Text>
								<Label>연락처</Label>
								<Text size='Medium'>010-0000-0000</Text>
							</FlexColumnBox>
						</FlexColumnBox>

						<FlexColumnBox>
							<Label>의뢰 내용</Label>
							<Text size='Medium'>내용</Text>
						</FlexColumnBox>

						<FlexColumnBox>
							<Label>마감 기한</Label>
							<Text size='Medium'>내용</Text>
						</FlexColumnBox>

						<FlexColumnBox>
							<Label>비용</Label>
							<Text size='Medium'>내용</Text>
						</FlexColumnBox>
				</RequestForm>
				</ContentSection>

				<ButtonGroup>
					<Button color='black' size='medium' shape='square'>주문 취소</Button>
				</ButtonGroup>
			</ModalBox>
		</RequestModalLayout>
	)
}