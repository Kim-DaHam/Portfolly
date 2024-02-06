import { Fragment, MouseEventHandler, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiX as XIcon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { userState } from "@/redux/loginSlice";
import { usePostCommissionQuery } from "@/utils/api-service/commission";

import * as v from "./CommissionModal.constants";
import * as S from "./CommissionModal.styled";

import { addValidationErrorToast } from "@/utils";

import { Text, Button, Modal, Profile, Rating } from "@/components";


type Props = {
	commission: any;
	handleModal: MouseEventHandler<HTMLElement>;
	editMode?: boolean;
	$modalState: boolean;
};

export type FormValues = {
	title: string;
	content: string;
	deadline: Date;
	cost: number;
};

const defaultValues: FormValues = {
	title: '',
	content: '',
	deadline: new Date(),
	cost: 0,
};

export default function RequestModal({ commission, handleModal, editMode, $modalState }: Props) {
	const [updatedCommission, setUpdatedCommission] = useState(commission);
	const [isEditMode, setIsEditMode] = useState(editMode);

	const dispatch = useDispatch();

	const { authority } = useSelector(userState);

	const { register, reset, handleSubmit, formState: { isSubmitting, errors, dirtyFields } } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const commissionMutation = usePostCommissionQuery(commission.id, commission.clientId);

	const onSubmit = async (form: any) => {
		const copyForm: {[key: string]: any} = {...form};
		const changedKeys = Object.keys(dirtyFields);
		const changedValues: {[key: string]: any} = {};

		changedKeys.map((key) => {
			changedValues[key] = copyForm[key];
		});

		await commissionMutation.mutate(changedValues, {
			onSuccess: (response) => {
				setIsEditMode(prev=>!prev);
				setUpdatedCommission(response);
			},
		});
	};

	useEffect(() => {
		if(commission.details) {
			reset({
				title: commission.details.title,
				content: commission.details.content,
				deadline: commission.details.deadline,
				cost: commission.details.cost,
			});
			return;
		}
		setUpdatedCommission({...commission, details: {...defaultValues}});
	}, []);

	useEffect(() => {
		addValidationErrorToast(isSubmitting, errors, dispatch);
	}, [isSubmitting]);

	return(
		<Modal $type='form' $modalState={$modalState}>
			<Fragment>

			<S.ButtonBox onClick={handleModal}>
				<XIcon size={28}/>
			</S.ButtonBox>

			<S.Content>
				<S.Form>
					<S.Box>
						{ isEditMode ?
							<S.TextInput {...register('title', {
								required: '의뢰 제목을 입력하세요.',
								validate: v.validateTitle,
							})} />
							:
							<Text size='titleSmall'>{updatedCommission.details.title}</Text>
						}
						<Text size='bodySmall'>{updatedCommission.createdAt}</Text>
						{updatedCommission.details && <Text size='bodySmall'>{updatedCommission.details.status}</Text>}
					</S.Box>

					<S.Box>
						<Text size='label'>관련 포트폴리오</Text>
							<Profile type='portfolio' portfolio={commission.portfolio}/>
					</S.Box>

					<S.Box>
						<Text size='label'>전문가 정보</Text>
						<S.Box>
							<Profile type='user' user={commission.expert}/>
							<Text size='label'>이름</Text>
							<Text size='bodyMedium'>{commission.expert.name}</Text>
							<Text size='label'>연락처</Text>
							<Text size='bodyMedium'>{commission.expert.phone}</Text>
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
							<Text size='bodyMedium'>{updatedCommission.details.content}</Text>
						}
					</S.Box>

					<S.Box>
						<Text size='label'>마감 기한</Text>
						{ isEditMode ?
							<input type='date' {...register('deadline', {
								required: '마감 기한을 입력하세요.',
								validate: v.validateDeadline,
							})} />
							:
							<Text size='bodyMedium'>{updatedCommission.details.deadline}</Text>
						}
					</S.Box>

					<S.Box>
						<Text size='label'>비용</Text>
						{ isEditMode ?
							<S.Input {...register('cost', {
								required: '비용을 입력하세요.',
							})} />
							:
							<Text size='bodyMedium'>{updatedCommission.details.cost}</Text>
						}
					</S.Box>

					{ commission.review &&
						<S.Box>
							<Text size='label'>리뷰</Text>
							<Rating readonly score={commission.review.rating} />
							<Text size='bodyMedium'>{commission.review.content}</Text>
						</S.Box>
					}
				</S.Form>
			</S.Content>

			<S.ButtonGroup>
				{ authority === 'expert' && !isEditMode &&
					<Button color='black' size='medium' shape='square' onClick={() => setIsEditMode(prev=>!prev)}>의뢰 수정</Button>
				}
				{ authority === 'client' && commission.details.state !== '구매 확정' &&
					<Button color='black' size='medium' shape='square'>주문 취소</Button>
				}
				{ isEditMode ?
					<Button color='black' size='medium' shape='square' onClick={handleSubmit(onSubmit)}>저장하기</Button>
					:
					<Button color='black' size='medium' shape='square' onClick={handleModal}>닫기</Button>
				}
			</S.ButtonGroup>
			</Fragment>
		</Modal>
	)
}