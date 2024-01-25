import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillQuestionCircle as QuestionIcon } from "react-icons/ai";

import { isIncludedKeyword } from "./Management.helpers";

import { Text, Selector , Button, CommissionModal, Tracking, CommissionItem } from "@/components";
import * as S from "@/components/organisms/profile-description/management/Management.styled";
import { useModal } from "@/hooks";
import { toLocalDataString } from "@/utils";

type Props = {
	commissions: any;
};

export type FormValues = {
	commissionType: string;
	commissionState: string;
	searchFilter: '닉네임' | '프로젝트명';
	searchKeyword: string;
	startDate: string | null;
	endDate: string | null;
};

const defaultValues: FormValues = {
	commissionType: '전체 상품',
	commissionState: '전체 상태',
	searchFilter: '닉네임',
	searchKeyword: '',
	startDate: null,
	endDate: null,
};

export default function Management({ commissions }: Props) {
	const [commissionList, setCommissionList] = useState(commissions);

	const { register, handleSubmit, setValue } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const onSubmit = (data: FormValues) => {
		const filteredCommissions = commissions.filter((commission: any) => {
			return (
				(data.commissionType === '전체 상품' || commission.portfolio.section === data.commissionType) &&
				(data.commissionState === '전체 상태' || commission.details.state === data.commissionState) &&
				(data.startDate === null || new Date(commission.createdAt) <= new Date(data.endDate!)) &&
				(data.endDate === null || new Date(commission.endedAt) >= new Date(data.startDate!)) &&
				(data.searchKeyword === '' || isIncludedKeyword(data.searchFilter, commission, data.searchKeyword))
			)
		});
		setCommissionList(filteredCommissions);
	};

	return(
		<S.Wrapper>
			<Tracking commissions={commissions}/>

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
						<input type='date' {...register('startDate')} />
						ㅤ-ㅤ
						<input type='date' {...register('endDate')} />
					</S.DateSelector>

					<Selector
						type='searchFilter'
						placeholder='닉네임'
						setValue={setValue}
						{...register('searchFilter')}
					/>

					<S.Input {...register('searchKeyword')} />

					<Button color="white" shape="square" type='submit' size='fit'>검색</Button>
				</S.Form>
			</S.SearchFilterSection>

			<S.ContentSection>
				<S.List>
					{ commissionList.map((commission: any, index: number) => {
						return (
							<CommissionItem
								commission={commission}
								index={index + 1}
								key={commission.id}
							/>
						)})
					}
				</S.List>
			</S.ContentSection>
		</S.Wrapper>
	)
}