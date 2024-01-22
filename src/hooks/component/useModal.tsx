import { MouseEventHandler, useState } from "react";

export default function useModal() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModal: MouseEventHandler<HTMLElement> = () => {
		setIsModalOpen(prev=>!prev);
	};

	return { isModalOpen, handleModal };
}