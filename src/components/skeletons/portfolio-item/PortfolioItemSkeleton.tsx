import { useSelector } from "react-redux";

import { PortfolioItemSkeletonLayout } from "./PortfolioItemSkeleton.styled";

import { section as sectionSlice } from "@/redux/sectionSlice";
import { Section } from "@/types/portfolio";

type Props = {
	section?: Section;
}

function PortfolioItemSkeleton({section}: Props) {
	const currentSection = useSelector(sectionSlice);

	return(
		<PortfolioItemSkeletonLayout section={section ? section : currentSection}/>
	)
}

export default PortfolioItemSkeleton;