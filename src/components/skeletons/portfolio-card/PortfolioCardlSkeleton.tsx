import { useSelector } from "react-redux";

import * as S from "@/components/skeletons/portfolio-card/PortfolioCardSkeleton.styled";
import { section as sectionSlice } from "@/redux/sectionSlice";
import { Section } from "@/types";

type Props = {
	section?: Section;
}

export default function PortfolioItemSkeleton({section}: Props) {
	const currentSection = useSelector(sectionSlice);

	return(
		<S.Layout $section={section ? section : currentSection}/>
	)
}