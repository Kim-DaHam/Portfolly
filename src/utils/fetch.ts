import axios, { AxiosHeaders } from 'axios';

import { API_BASE_URL } from '@/app-config';

import type { AxiosRequestHeaders, AxiosRequestConfig } from 'axios';

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export async function fetch(api: string, method: Method, body?: object) {
	// redux에서 토큰 가져오기
  // const accessToken = localStorage.getItem(ACCESS_TOKEN);

  const headers: AxiosRequestHeaders = new AxiosHeaders({
    'Content-Type': 'application/json',
    // accessToken: `${accessToken}`,
  });

  const options: AxiosRequestConfig = {
    headers: headers,
    method: method,
    url: API_BASE_URL + api,
  };

  if (body) {
    options.data = JSON.stringify(body);
  }

	const response = await axios(options);

	return response.data;
}