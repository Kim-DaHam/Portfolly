import { useState } from "react";
import { AiFillQuestionCircle as QuestionIcon } from "react-icons/ai";

import { Text, Selector , Button, RequestModal, Tracking } from "@/components";
import * as S from "@/components/organisms/profile-description/management/Management.styled";

export default function Management() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openRequestModal = ()=> {
		setIsOpenModal(prev=>!prev)
	}

	return(
		<S.Wrapper>
			<Tracking/>

			<S.Notice>
				<QuestionIcon/>
				<Text type='small'>구매 과정 및 주문 상태 안내</Text>
			</S.Notice>

			<S.SearchFilterSection>
				<S.Form>
					<Selector type='RequestType' placeholder='전체 상품'/>
					<Selector type='RequestState' placeholder='전체 상태'/>

					<S.DateSelector>
						DateSelector
					</S.DateSelector>

					<Selector type='SearchFilter' placeholder='닉네임'/>

					<S.Input/>

					<Button color="white" shape="square">검색</Button>
				</S.Form>
			</S.SearchFilterSection>

			<S.ContentSection>
				<S.List>
					<S.Item>
						<Text type='small'>1</Text>
						<S.Box onClick={openRequestModal}>
							<Text type='common'>Title</Text>
							<Text type='small'>의뢰 설명</Text>
							<Text type='small'>의뢰 날짜</Text>
						</S.Box>
					</S.Item>
				</S.List>
			</S.ContentSection>

			{ isOpenModal &&
				<RequestModal handleModal={setIsOpenModal}/>
			}
		</S.Wrapper>
	)
}