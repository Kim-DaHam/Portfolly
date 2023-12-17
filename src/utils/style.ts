export const stopScrollY = ()=>{
	document.body.style.cssText = `
		position: fixed;
		top: -${window.scrollY}px;
		overflow-y: scroll;
		width: 100%;
		overflow: hidden;
	`
};

export const moveScrollY = ()=>{
	const scrollY = document.body.style.top;
	document.body.style.cssText = '';
	window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};