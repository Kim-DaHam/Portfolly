import { MouseEventHandler, useState } from "react";

import { moveScrollY, stopScrollY } from "@/utils";

export default function useModal() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModal: MouseEventHandler<HTMLElement> = () => {
		if(isModalOpen) {
			moveScrollY();
		}
		if(!isModalOpen) {
			stopScrollY();
		}
		setIsModalOpen(prev=>!prev);
	};

	return { isModalOpen, handleModal };
}