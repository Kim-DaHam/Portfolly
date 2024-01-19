import { useSelector } from 'react-redux';

import { Toast } from '@/components';
import * as S from '@/components/molecules/toast/ToastContainer.styled';
import { toasts } from '@/redux/toastSlice';
import { Toast as TToast } from '@/types';

export default function ToastContainer() {
	const toastList = useSelector(toasts) as TToast[];

	return (
		<S.Wrapper>
			{toastList.map((toast: TToast) => {
				return <Toast key={toast.id} type={toast.type} message={toast.message} id={toast.id} />;
			})}
		</S.Wrapper>
	)
}