import Error from '@/components/error/Error';

import type { FallbackProps } from 'react-error-boundary';

function ApiErrorFallback({error, resetErrorBoundary}: FallbackProps) {
	const { status } = error.response;

	// if(status) {
	// 	return(
	// 		<Error reset={resetErrorBoundary}/>
	// 	)
	// }

	// if(status) {
	// 	return(
	// 		<Error reset={resetErrorBoundary}/>
	// 	)
	// }
}

export default ApiErrorFallback;