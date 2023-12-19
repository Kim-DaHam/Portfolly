import { useState } from "react";
import { AiFillQuestionCircle as QuestionIcon } from "react-icons/ai";

import RequestModal from "../../modal/request-modal/RequestModal";

import { Box, BoxList, ContentSection, Count, DateSelector, FilterForm, FlexBox, FlexColumnBox, Input, Item, LabelBox, List, ManagementLayout, SearchFilterSection, Span, SpanBox, Title, TrackingSection } from "./Management.styled";

import { SquareButton } from "@/components/atoms/button/Button.styled";
import Selector from "@/components/atoms/selector/Selector";

function Management() {
	const [isOpenModal, setIsOpenModal] = useState(true);

	const openRequestModal = ()=> {
		setIsOpenModal(prev=>!prev)
	}

	return(
		<ManagementLayout>
			<TrackingSection>
				<BoxList>
					<Box>
						<LabelBox>
							<div>아이콘</div>
							<Span>진행중</Span>
						</LabelBox>
						<Count>0</Count>
					</Box>
					<Box>
						<LabelBox>
							<div>아이콘</div>
							<Span>진행중</Span>
						</LabelBox>
						<Count>0</Count>
					</Box>
					<Box>
						<LabelBox>
							<div>아이콘</div>
							<Span>진행중</Span>
						</LabelBox>
						<Count>0</Count>
					</Box>
					<Box>
						<SpanBox>
							<Span>구매 확정</Span>
							<Span>0</Span>
						</SpanBox>
						<SpanBox>
							<Span>작성 가능한 리뷰</Span>
							<Span>0</Span>
						</SpanBox>
						<SpanBox>
							<Span>주문 취소</Span>
							<Span>0</Span>
						</SpanBox>
					</Box>
				</BoxList>
			</TrackingSection>

			<FlexBox>
				<QuestionIcon/>
				<Span>구매 과정 및 주문 상태 안내</Span>
			</FlexBox>

			<SearchFilterSection>
				<FilterForm>
					<Selector type='Category'/>
					<Selector type='Category'/>

					<DateSelector>
						DateSelector
					</DateSelector>

					<Selector type='Category'/>

					<Input/>

					<SquareButton color="White">검색</SquareButton>
				</FilterForm>
			</SearchFilterSection>

			<ContentSection>
				<List>
					<Item>
						<Span>1</Span>
						<FlexColumnBox onClick={openRequestModal}>
							<Title>Title</Title>
							<Span>의뢰 설명</Span>
							<Span>의뢰 날짜</Span>
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

export default Management;