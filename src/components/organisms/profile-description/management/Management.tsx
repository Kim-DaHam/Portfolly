import { useState } from "react";
import { AiFillQuestionCircle as QuestionIcon } from "react-icons/ai";

import RequestModal from "../../modal/request-modal/RequestModal";
import Tracking from "../../tracking/Tracking";

import { ContentSection, DateSelector, FilterForm, Item, List, ManagementLayout, Notice, SearchFilterSection, SearchInput } from "./Management.styled";

import { SquareButton } from "@/components/atoms/button/Button.styled";
import Selector from "@/components/atoms/selector/Selector";
import { FlexColumnBox } from "@/styles/Container.styled";
import { Text } from "@/styles/Text.styled";

export default function Management() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openRequestModal = ()=> {
		setIsOpenModal(prev=>!prev)
	}

	return(
		<ManagementLayout>
			<Tracking/>

			<Notice>
				<QuestionIcon/>
				<Text size='Small'>구매 과정 및 주문 상태 안내</Text>
			</Notice>

			<SearchFilterSection>
				<FilterForm>
					<Selector type='RequestType' placeholder='전체 상품'/>
					<Selector type='RequestState' placeholder='전체 상태'/>

					<DateSelector>
						DateSelector
					</DateSelector>

					<Selector type='SearchFilter' placeholder='닉네임'/>

					<SearchInput/>

					<SquareButton color="White">검색</SquareButton>
				</FilterForm>
			</SearchFilterSection>

			<ContentSection>
				<List>
					<Item>
						<Text size='Small'>1</Text>
						<FlexColumnBox onClick={openRequestModal}>
							<Text size='Medium'>Title</Text>
							<Text size='Small'>의뢰 설명</Text>
							<Text size='Small'>의뢰 날짜</Text>
						</FlexColumnBox>
					</Item>
				</List>
			</ContentSection>

			{ isOpenModal &&
				<RequestModal handleModal={setIsOpenModal}/>
			}
		</ManagementLayout>
	)
}