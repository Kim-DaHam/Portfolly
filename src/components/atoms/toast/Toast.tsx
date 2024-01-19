import { useEffect, useState } from "react";
import { FiAlertCircle as ErrorIcon, FiCheck as SuccessIcon } from "react-icons/fi";
import { useDispatch } from "react-redux";

import { Text } from "@/components";
import * as S from '@/components/atoms/toast/Toast.styled';
import { deleteToast } from "@/redux/toastSlice";
import { Toast as TToast} from '@/types';

export default function Toast ({ id, type, message }: TToast) {
	const [animation, setAnimation] = useState('openAnimation');

	const dispatch = useDispatch();

	useEffect(() => {
		let toastTimer: any;
		const animationTimer = setTimeout(() => {
			setAnimation('closeAnimation');
			toastTimer = setTimeout(() => {
				dispatch(deleteToast(id));
			}, 200);
    }, 1400);

    return () => {
			clearTimeout(animationTimer);
      clearTimeout(toastTimer);
    };
	}, []);

	return (
		<S.Wrapper $type={type} className={animation}>
			{ type === 'error' ? <ErrorIcon color='white' /> : <SuccessIcon color='white' /> }
			<Text type='common' color='white'>{message}</Text>
		</S.Wrapper>
	);
}