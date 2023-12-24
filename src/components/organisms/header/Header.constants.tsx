import { useLocation } from "react-router-dom";

export const PAGE_SHOW_SEARCH_BAR = '/main' || '/profile' || '/contact';
export const PAGE_SHOW_SECTION_MENU = '/main';

const location = useLocation();

export const showSearchBar = (location.pathname === PAGE_SHOW_SEARCH_BAR );

export const showSectionMenu = (location.pathname === PAGE_SHOW_SECTION_MENU);