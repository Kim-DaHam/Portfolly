import { Fragment, MouseEventHandler, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiX as XIcon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import * as v from "./CommissionModal.constants";
import * as S from "./CommissionModal.styled";

import { Text, Button, Modal, Profile, Rating } from "@/components";
import { useStopScrollY } from "@/hooks";
import { authority } from "@/redux/loginSlice";
import { setToast } from "@/redux/toastSlice";
import { usePostCommissionQuery } from "@/utils/api-service/commission";

type Props = {
	commission: any;
	handleModal: MouseEventHandler<HTMLElement>;
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

export default function RequestModal({ commission, handleModal }: Props) {
	const [updatedCommission, setUpdatedCommission] = useState(commission);
	const [isEditMode, setIsEditMode] = useState(false);

	const dispatch = useDispatch();

	const auth = useSelector(authority);

	const { register, reset, handleSubmit, formState: { isSubmitting, errors, dirtyFields } } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const commissionMutation = usePostCommissionQuery(commission.id);

	useStopScrollY();

	const onSubmit = async (form: any) => {
		const copyForm: {[key: string]: any} = {...form};
		const changedKeys = Object.keys(dirtyFields);
		const changedValues: {[key: string]: any} = {};

		changedKeys.map((key) => {
			changedValues[key] = copyForm[key];
		});
		changedValues.section = form.section;

		await commissionMutation.mutate(changedValues, {
			onSuccess: (response) => {
				setIsEditMode(prev=>!prev);
				setUpdatedCommission(response);
			},
		});
	};

	useEffect(() => {
		reset({
			title: commission.details.title,
			content: commission.details.content,
			deadline: commission.details.deadline,
			cost: commission.details.cost,
		});
	}, []);

	useEffect(() => {
		if(isSubmitting) {
			const copyErrors: {[key in string]: any} = {...errors};
			const errorKeys = Object.keys(errors);
			const toastId = Date.now();

			if(errorKeys.length > 0)
				dispatch(setToast({ id: toastId, type: 'error', message: copyErrors[errorKeys[0]].message}));
		}
	}, [isSubmitting]);

	return(
		<Modal $type='form'>
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
							<Text type='titleSmall'>{updatedCommission.details.title}</Text>
						}
						<Text type='small'>{updatedCommission.createdAt}</Text>
					</S.Box>

					<S.Box>
						<Text type='label'>관련 포트폴리오</Text>
							<Profile type='portfolio' user={commission.portfolio}/>
					</S.Box>

					<S.Box>
						<Text type='label'>전문가 정보</Text>
						<S.Box>
							<Profile type='user' user={commission.expert}/>
							<Text type='label'>이름</Text>
							<Text type='common'>{commission.expert.name}</Text>
							<Text type='label'>연락처</Text>
							<Text type='common'>{commission.expert.phone}</Text>
						</S.Box>
					</S.Box>

					<S.Box>
						<Text type='label'>의뢰 내용</Text>
						{ isEditMode ?
							<S.TextArea {...register('content', {
								required: '자세한 의뢰 내용을 입력하세요.',
								validate: v.validateContent,
							})} />
							:
							<Text type='common'>{updatedCommission.details.content}</Text>
						}
					</S.Box>

					<S.Box>
						<Text type='label'>마감 기한</Text>
						{ isEditMode ?
							<input type='date' {...register('deadline', {
								required: '마감 기한을 입력하세요.',
								validate: v.validateDeadline,
							})} />
							:
							<Text type='common'>{updatedCommission.details.deadline}</Text>
						}
					</S.Box>

					<S.Box>
						<Text type='label'>비용</Text>
						{ isEditMode ?
							<S.Input {...register('cost', {
								required: '비용을 입력하세요.',
							})} />
							:
							<Text type='common'>{updatedCommission.details.cost}</Text>
						}
					</S.Box>

					{ commission.review &&
						<S.Box>
							<Text type='label'>리뷰</Text>
							<Rating readonly score={commission.review.rating} />
							<Text type='common'>{commission.review.content}</Text>
						</S.Box>
					}
				</S.Form>
			</S.Content>

			<S.ButtonGroup>
				{ auth === 'expert' && !isEditMode &&
					<Button color='black' size='medium' shape='square' onClick={() => setIsEditMode(prev=>!prev)}>의뢰 수정</Button>
				}
				{ auth === 'client' && commission.details.state !== '구매 확정' &&
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