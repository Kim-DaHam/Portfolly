import type { FallbackProps } from 'react-error-boundary';

import { getErrorMessage } from '@/utils';

import { Error } from '@/components';

export default function GlobalErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	const status = error.response?.status;
	const message = getErrorMessage(status);

	return(
		<Error
			message={message}
			reset={resetErrorBoundary}
		/>
	)
}