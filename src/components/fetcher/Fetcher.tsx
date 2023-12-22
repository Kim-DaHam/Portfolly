import React from "react";
import { useErrorBoundary } from 'react-error-boundary';

import useFetcher from "@/hooks/useFetcher";

type Props = {
	action: ()=>Promise<object>;
	children: JSX.Element;
}

function Fetcher({action, children}: Props) {
	const [data, loading, error] = useFetcher(action);

	if(loading) return <></>;

	if(error) useErrorBoundary();

	return (
		<>
			{React.cloneElement(children, {data})}
		</>
	);
}

export default Fetcher;