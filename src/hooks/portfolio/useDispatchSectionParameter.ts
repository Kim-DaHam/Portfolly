import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { setSection } from "@/redux/sectionSlice";
import { sectionUrlParameterMap } from "@/utils/path";

export default function useDispatchSectionParameter() {
	const dispatch = useDispatch();
	const params = useParams() as {section: string};

	const getSectionUrlParameter = () => {
		const section = sectionUrlParameterMap[params.section];
		dispatch(setSection(section));
	};

	useEffect(() => {
		getSectionUrlParameter();
	}, [params]);

	return;
}