import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiX as XIcon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import * as v from "@/components/organisms/modal/commission-modal/CommissionModal.constants";
import * as S from "@/components/organisms/modal/commission-modal/CommissionModal.styled";

import type { Commission } from "@/types";

import { setAlert, setToast, userState } from "@/redux";
import { usePostCommissionQuery , addValidationErrorToast, toLocalDateString } from "@/utils";

import { Text, Button, Modal, Profile, Rating } from "@/components";

type Props = {
	commission: Commission;
	handleModal: ()=>void;
	editMode?: boolean;
	$modalState: boolean;
};

export type FormValues = {
	title: string;
	content: string;
	deadline: string;
	cost: number;
};

const defaultValues: FormValues = {
	title: '',
	content: '',
	deadline: toLocalDateString(Date.now()),
	cost: 0,
};

export default function CommissionModal({ commission, handleModal, editMode, $modalState }: Props) {
	const [isEditMode, setIsEditMode] = useState(editMode);

	const dispatch = useDispatch();
	const { authority } = useSelector(userState);

	const commissionMutation = usePostCommissionQuery(
		commission.portfolio!.id!,
		commission.client.id,
		commission.id
	);

	const {
		register,
		reset,
		handleSubmit,
		formState: {
			isSubmitting,
			errors,
			dirtyFields
		} } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const closeModal = () => {
		if(isEditMode) {
			dispatch(setAlert({type: 'cancel', onConfirm: () => {
				handleModal();
				setIsEditMode(false);
			}}))
			return;
		}
		handleModal();
	};

	const handleCommissionStatus = (type: string) => {
		switch(type) {
			case 'argument':
				commissionMutation.mutate({
					status: '분쟁 조정 중'
				}, {
					onSuccess: () => {
						dispatch(setToast({id: 0, type: 'success', message: '분쟁 상태로 변경되었습니다.'}));
					},
				});
			break;
			case 'cancel':
				commissionMutation.mutate({
					status: '주문 취소'
				}, {
					onSuccess: () => {
						dispatch(setToast({id: 0, type: 'success', message: '주문 취소 상태로 변경되었습니다.'}));
					},
				});
			break;
			case 'reopen':
				commissionMutation.mutate({
					status: '분쟁 해결'
				}, {
					onSuccess: () => {
						dispatch(setToast({id: 0, type: 'success', message: '진행 중 상태로 변경되었습니다.'}));
					},
				});
			break;
		}
	};

	const onSubmit = async (form: any) => {
		const copyForm: {[key: string]: any} = {...form};
		const changedKeys = Object.keys(dirtyFields);
		const changedValues: {[key: string]: any} = {};

		changedKeys.map((key) => {
			changedValues[key] = copyForm[key];
		});

		await commissionMutation.mutate(changedValues, {
			onSuccess: () => {
				setIsEditMode(prev=>!prev);
			},
		});
	};

	useEffect(() => {
		if(!commission.details) return;
		reset({
			title: commission.details.title,
			content: commission.details.content,
			deadline: commission.details.deadline,
			cost: commission.details.cost,
		});
	}, []);

	useEffect(() => {
		addValidationErrorToast(isSubmitting, errors, dispatch);
	}, [isSubmitting]);

	return(
		<Modal $type='form' $modalState={$modalState}>
			<S.Content>
				<XIcon size={28} onClick={closeModal} />

				<S.Form>
					<S.Box>
						{ isEditMode ?
							<S.TitleInput {...register('title', {
								required: '의뢰 제목을 입력하세요.',
								validate: v.validateTitle,
								})}
								placeholder='제목을 입력하세요'
							/>
							:
							<Text size='headingSmall'>
								{commission.details?.title}
							</Text>
						}

						<Text size='bodySmall'>
							{commission.createdAt}
						</Text>

						{ commission.details &&
							<Text size='bodySmall'>
								{commission.details.status}
							</Text>
						}
					</S.Box>

					<S.Box>
						<Text size='label'>관련 포트폴리오</Text>
							<Profile type='portfolio' portfolio={commission.portfolio}/>
					</S.Box>

					<S.Box>
						<Text size='label'>전문가 정보</Text>
						<S.Box>
							<Profile type='user' user={commission.expert}/>
							<br/>
							<Text size='label'>이름</Text>
							<Text size='bodyMedium'>
								{commission.expert?.name}
							</Text>
							<Text size='label'>연락처</Text>
							<Text size='bodyMedium'>
								{commission.expert?.phone}
							</Text>
						</S.Box>
					</S.Box>

					<S.Box>
						<Text size='label'>의뢰 내용</Text>
						{ isEditMode ?
							<S.TextArea {...register('content', {
								required: '자세한 의뢰 내용을 입력하세요.',
								validate: v.validateContent,
							})} />
							:
							<Text size='bodyMedium'>
								{commission.details?.content}
							</Text>
						}
					</S.Box>

					<S.Box>
						<Text size='label'>마감 기한</Text>

						{ isEditMode ?
							<S.Input type='date' {...register('deadline', {
								required: '마감 기한을 입력하세요.',
								validate: v.validateDeadline(commission.createdAt),
							})} />
							:
							<Text size='bodyMedium'>
								{commission.details?.deadline}
							</Text>
						}
					</S.Box>

					<S.Box>
						<Text size='label'>비용</Text>
						{ isEditMode ?
							<S.Input {...register('cost', {
								required: '비용을 입력하세요.',
							})} />
							:
							<Text size='bodyMedium'>
								{commission.details?.cost}
							</Text>
						}
					</S.Box>

					{ commission.review &&
						<S.Box>
							<Text size='label'>리뷰</Text>
							<Rating readonly score={commission.review.score} />
							<Text size='bodyMedium'>
								{commission.review.content}
							</Text>
						</S.Box>
					}
				</S.Form>

				<S.ButtonGroup>
					{ authority === 'expert' && !isEditMode && commission.details?.status !== '구매 확정' &&
						<Button
							color='black'
							size='medium'
							onClick={() => setIsEditMode(prev=>!prev)}
						>
							의뢰 수정
						</Button>
					}
					{ authority === 'client' && commission.details?.status === '진행 중' &&
						<Button
							color='black'
							size='medium'
							onClick={() => handleCommissionStatus('argument')}
						>
							주문 취소
						</Button>
					}
					{ authority === 'client' && commission.details?.status === '분쟁 조정 중' &&
						<Button
							color='black'
							size='medium'
							onClick={() => handleCommissionStatus('argument')}
						>
							분쟁 종료
						</Button>
					}
					{ isEditMode ?
						<Button
							color='black'
							size='medium'
							onClick={handleSubmit(onSubmit)}
						>
							저장하기
						</Button>
						:
						<Button
							color='gray'
							size='medium'
							onClick={handleModal}
						>
							닫기
						</Button>
					}
				</S.ButtonGroup>
			</S.Content>
		</Modal>
	)
}