import { useNavigate } from 'react-router-dom';

import type { FallbackProps } from 'react-error-boundary';

import { getErrorMessage } from '@/utils';

import { Error } from '@/components';

function ApiErrorFallback({error, resetErrorBoundary}: FallbackProps) {
	const navigate = useNavigate();

	const { status } = error.response;
	const message = getErrorMessage(status);

	if(status === 401 || status === 402) {
		const errorHandler = () => {
			navigate(`/login`);
		};
		return (
			<Error
				type='component'
				reset={errorHandler}
				message={message}
			/>
		)
	}

	return(
		<Error
			type='component'
			reset={resetErrorBoundary}
			message={message}
		/>
	)
}

export default ApiErrorFallback;