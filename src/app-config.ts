export const API_BASE_URL =
	import.meta.env.PROD
		? import.meta.env.VITE_SERVER_URL
		: '';