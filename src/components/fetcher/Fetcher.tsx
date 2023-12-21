import React from "react";

import useFetcher from "@/hooks/useFetcher";

type Props = {
	action: ()=>Promise<object>;
	children: JSX.Element;
}

function Fetcher({action, children}: Props) {
	const [data, loading, error] = useFetcher(action);

	if(loading) return <></>;

	if(error) throw error;

	return (
		<>
			{React.cloneElement(children, {data})}
		</>
	);
}

export default Fetcher;