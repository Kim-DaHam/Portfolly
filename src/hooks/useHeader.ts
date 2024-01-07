import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { checkIsShowSearchBarPage, checkIsShowSectionMenuPage } from "@/components/organisms/header/Header.helpers";

export default function useHeader() {
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [showSectionNavigator, setShowSectionNavigator] = useState(false);

	const location = useLocation();

	useEffect(()=>{
		const firstPathName = location.pathname.split('/')[1];
		setShowSearchBar(checkIsShowSearchBarPage(firstPathName));
		setShowSectionNavigator(checkIsShowSectionMenuPage(firstPathName))
	}, []);

	return { showSearchBar, showSectionNavigator };
}