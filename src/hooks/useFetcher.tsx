import { useEffect, useState } from "react";

function useFetcher(action: ()=>Promise<object>) {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState<object | null>(null);

	async function loadData() {
		try {
			setLoading(true);

			const actionData = await action();

			setData(actionData);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(()=>{
		loadData();
	}, [action]);

	return [data, loading, error];
}

export default useFetcher;