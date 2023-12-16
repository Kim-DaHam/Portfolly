export const wheelHandler = (event:WheelEvent, container:HTMLElement) => {
	event.preventDefault();

	const { deltaY } = event;
	const { scrollTop } = container;
	const pageHeight = window.innerHeight;

	const DIVIDER_HEIGHT = 5;

	if (deltaY > 0) {
		if (scrollTop >= 0 && scrollTop < pageHeight) {
			container.scrollTo({
				top: pageHeight + DIVIDER_HEIGHT,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
			container.scrollTo({
				top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
			container.scrollTo({
				top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
			container.scrollTo({
				top: pageHeight * 4 + DIVIDER_HEIGHT * 2,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
			container.scrollTo({
				top: pageHeight * 5 + DIVIDER_HEIGHT * 2,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight * 5 && scrollTop < pageHeight * 6) {
			container.scrollTo({
				top: pageHeight * 6 + DIVIDER_HEIGHT * 2,
				left: 0,
				behavior: "smooth",
			});
		}
	}
	else {
		if (scrollTop >= 0 && scrollTop < pageHeight) {
			container.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
			container.scrollTo({
				top: DIVIDER_HEIGHT * 2,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
			container.scrollTo({
				top: pageHeight * 1 + DIVIDER_HEIGHT * 2,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
			container.scrollTo({
				top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
			container.scrollTo({
				top: pageHeight * 3 + DIVIDER_HEIGHT * 2,
				left: 0,
				behavior: "smooth",
			});
		}
		if (scrollTop >= pageHeight * 5 && scrollTop < pageHeight * 6) {
			container.scrollTo({
				top: pageHeight * 4 + DIVIDER_HEIGHT * 2,
				left: 0,
				behavior: "smooth",
			});
		}
	}
};