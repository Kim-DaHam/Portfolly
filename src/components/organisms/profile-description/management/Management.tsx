import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillQuestionCircle as QuestionIcon } from "react-icons/ai";

import { Text, Selector , Button, RequestModal, Tracking } from "@/components";
import * as S from "@/components/organisms/profile-description/management/Management.styled";
import { useModal } from "@/hooks";
import { toLocalDataString } from "@/utils";

type Props = {
	commissions: any;
};

export type FormValues = {
	commissionType: string;
	commissionState: string;
	searchFilter: string;
	searchKeyword: string;
};

const defaultValues: FormValues = {
	commissionType: '전체 상품',
	commissionState: '전체 상태',
	searchFilter: '닉네임',
	searchKeyword: '',
};

export default function Management({ commissions }: Props) {
	console.log(commissions)
	const { handleModal, isModalOpen } = useModal();

	const { register, handleSubmit, setValue } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const onSubmit = () => {

	};

	return(
		<S.Wrapper>
			<Tracking />

			<S.Notice>
				<QuestionIcon />
				<Text type='small'>구매 과정 및 주문 상태 안내</Text>
			</S.Notice>

			<S.SearchFilterSection>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<Selector
						type='commissionType'
						placeholder='전체 상품'
						setValue={setValue}
						{...register('commissionType')}
					/>
					<Selector
						type='commissionState'
						placeholder='전체 상태'
						setValue={setValue}
						{...register('commissionState')}
					/>

					<S.DateSelector>
						DateSelector
					</S.DateSelector>

					<Selector
						type='searchFilter'
						placeholder='닉네임'
						setValue={setValue}
						{...register('searchFilter')}
					/>

					<S.Input {...register('searchKeyword')} />

					<Button color="white" shape="square">검색</Button>
				</S.Form>
			</S.SearchFilterSection>

			<S.ContentSection>
				<S.List>
					{ commissions.map((commission: any) => {
						return (
							<S.Item onClick={handleModal} key={commission.id}>
								<Text type='small'>1</Text>
								<S.Box>
									<Text type='common'>{commission.details.title}</Text>
									<Text type='small'>{commission.details.summary}</Text>
									<Text type='small'>{toLocalDataString(new Date(commission.createdAt))}</Text>
								</S.Box>
							</S.Item>
						)})
					}
				</S.List>
			</S.ContentSection>

			{ isModalOpen &&
				<RequestModal handleModal={handleModal}/>
			}
		</S.Wrapper>
	)
}