import { useState } from "react";

export default function useSelector(placeholder: string) {
	const [isSelectorOpen, setIsSelectorOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(placeholder);

	const handleSelector = ()=> {
		setIsSelectorOpen(prev=>!prev);
	}

	const handleSelectedValue = (event: React.MouseEvent)=>{
		const target = event.target as HTMLDivElement;

		setSelectedValue(target.innerText);
		setIsSelectorOpen(prev=>!prev);
	}

	return { isSelectorOpen, selectedValue, handleSelector, handleSelectedValue };
}