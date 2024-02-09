import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { alertState, deleteAlert } from "@/redux/alertSlice";

import { useModal } from "@/hooks";

import { AlertModal } from "@/components";

export default function AlertContainer() {
	const dispatch = useDispatch();
	const { isModalOpen, handleModal } = useModal();
	const alert = useSelector(alertState);

	const onConfirm = () => {
		alert?.onConfirm();
		handleModal();
		dispatch(deleteAlert);
	};

	useEffect(() => {
		if(alert) {
			handleModal();
		}
	}, [alert]);

	if(!alert) return null;

	return (
		<AlertModal
			type={alert.type}
			onConfirm={onConfirm}
			handleModal={handleModal}
			$modalState={isModalOpen}
		/>
	)
}