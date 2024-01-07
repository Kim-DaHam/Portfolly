import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSection } from "@/redux/sectionSlice";
import { Section } from "@/types/portfolio";
import { stringToUrlParameter } from "@/utils/path";

export default function useSectionNavigator() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSection = (section: Section)=> {
		dispatch(setSection(section));
		navigate(`/main/${stringToUrlParameter(section)}`);
	};

	return { handleSection };
}