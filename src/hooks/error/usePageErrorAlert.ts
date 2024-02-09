import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setAlert } from "@/redux";

export default function usePageErrorAlert(isError: boolean) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if(!isError) return;
		dispatch(setAlert({
			type: 'error',
			onConfirm: () => navigate(-1),
		}));
	}, [isError]);
}