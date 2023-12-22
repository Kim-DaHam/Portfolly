import type { FallbackProps } from 'react-error-boundary';

import Error from '@/pages/error/Error';


function GlobalErrorFallback({error, resetErrorBoundary}: FallbackProps) {
	const status = error.response?.status;

	if(status) { // 네트워크 에러
		return(
			<Error reset={resetErrorBoundary}/>
		)
	}

	if(status) { // 서버 점검 에러
		return(
			<Error reset={resetErrorBoundary}/>
		)
	}

	return(
		<Error reset={resetErrorBoundary}/>
	)
}

export default GlobalErrorFallback;