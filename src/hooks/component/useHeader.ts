import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { checkIsShowSearchBar, checkIsShowSectionMenu } from "@/components/organisms/header/Header.helpers";

export default function useHeader() {
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [showSectionNavigator, setShowSectionNavigator] = useState(false);

	const location = useLocation();

	useEffect(()=>{
		const pathname = location.pathname.split('/')[1];
		setShowSearchBar(checkIsShowSearchBar(pathname));
		setShowSectionNavigator(checkIsShowSectionMenu(pathname))
	}, [location]);

	return { showSearchBar, showSectionNavigator };
}