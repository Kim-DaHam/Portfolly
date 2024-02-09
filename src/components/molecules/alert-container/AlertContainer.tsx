import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

import { alertState } from "@/redux/alertSlice";

import { useModal } from "@/hooks";

import { AlertModal } from "@/components";

export default function AlertContainer() {
	const { isModalOpen, handleModal } = useModal();
	const alert = useSelector(alertState);

	const onConfirm = () => {
		alert?.onConfirm();
		handleModal();
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