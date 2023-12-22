import type { FallbackProps } from 'react-error-boundary';

const renderGlobalError = ({error, resetErrorBoundary}: FallbackProps)=> {
	const { status } = error.response;

	if(status) { // 네트워크 에러
		return(
			<>
				{error.message}
				<div onClick={() => resetErrorBoundary()}>reset</div>
			</>
		)
	}

	if(status) { // 서버 점검 에러
		return(
			<>
				{error.message}
				<div onClick={() => resetErrorBoundary()}>reset</div>
			</>
		)
	}
}

export const globalErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {

	return(
		<>
		{renderGlobalError({error, resetErrorBoundary})}
		</>
	);
}