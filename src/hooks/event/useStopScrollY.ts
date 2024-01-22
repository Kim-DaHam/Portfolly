import { useEffect } from "react";

export default function useStopScrollY() {
	const stopScrollY = () => {
		document.body.style.cssText = `
			position: fixed;
			top: -${window.scrollY}px;
			overflow-y: scroll;
			width: 100%;
			overflow: hidden;
		`
	};

	const moveScrollY = () => {
		const scrollY = document.body.style.top;
		document.body.style.cssText = '';
		window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
	};

	useEffect(()=>{
	stopScrollY();
	return () => {
		moveScrollY();
	}
	}, []);

	return;
}