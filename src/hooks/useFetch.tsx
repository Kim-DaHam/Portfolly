import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

import { API_BASE_URL } from '@/app-config';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type InitialProps = {
	api: string;
	method: Method;
	data?: object;
};

function useFetch({api, method, data}: InitialProps) {
	const [options, setOptions] = useState({
		headers: {
			'Content-Type': 'application/json',
			accessToken: ``, // 전역상태에서 가져온 accessToken
		},
		method: method,
		url: API_BASE_URL + api,
		data: '',
	})

	useEffect(()=>{
		if(data) {
			setOptions({
				...options,
				data: JSON.stringify(data),
			})
		}
	}, [])

	const call = useCallback(async ()=> {
		const response = await axios(options);
		return response.data;
	}, [])

	return [ call ];
}

export default useFetch;