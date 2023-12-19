import { Span } from "../../profile-description/introduce/Introduce.styled";

import { ButtonGroup, Content, FlexBox, FlexColumnBox, ModalBox, RequestForm, RequestModalLayout, Title, TitleSection } from "./RequestModal.styled";

import { SquareButton } from "@/components/atoms/button/Button.styled";
import Profile from "@/components/molecules/profile/Profile";
import { Label } from "@/pages/portfolio-detail/PortfolioDetail.styeld";
import { SetState } from "@/types";
import { eventStopPropagation } from "@/utils/event";

type Props = {
	handleModal: SetState<boolean>;
}

function RequestModal({handleModal}: Props) {

	const closeModal = ()=> {
		handleModal(prev=>!prev);
	}

	return(
		<RequestModalLayout onClick={closeModal}>
			<ModalBox onClick={eventStopPropagation}>
				<TitleSection>
					<Title>Title</Title>
					<Span>Date</Span>
				</TitleSection>

				<RequestForm>
					<FlexColumnBox>
						<Label>전문가 정보</Label>
						<FlexBox>
							<Profile type='Default'/>
							<Label>이름</Label>
							<Label>연락처</Label>
						</FlexBox>
					</FlexColumnBox>

					<FlexColumnBox>
						<Label>의뢰 내용</Label>
						<Content>내용</Content>
					</FlexColumnBox>

					<FlexColumnBox>
						<Label>마감 기한</Label>
						<Content>내용</Content>
					</FlexColumnBox>

					<FlexColumnBox>
						<Label>비용</Label>
						<Content>내용</Content>
					</FlexColumnBox>
				</RequestForm>

				<ButtonGroup>
					<SquareButton color='Black'>주문 취소</SquareButton>
				</ButtonGroup>
			</ModalBox>
		</RequestModalLayout>
	)
}

export default RequestModal;