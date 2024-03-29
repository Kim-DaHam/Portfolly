export const eventStopPropagation = (event: React.MouseEvent)=>{
	event.stopPropagation();
};

export const stopScrollY = () => {
	document.body.style.cssText = `
		width: 100%;
		position: fixed;
		top: -${window.scrollY}px;
		overflow-y: scroll;
		overflow: hidden;
	`;
};

export const moveScrollY = () => {
	const scrollY = document.body.style.top;
	document.body.style.cssText = '';
	window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};