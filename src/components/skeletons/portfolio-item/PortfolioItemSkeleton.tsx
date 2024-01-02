import { Section } from "@/types/portfolio";

type Props = {
	type: Section;
}

function PortfolioItemSkeleton({type}: Props) {
	return(
		<PortfolioItemSkeleton type={type}/>
	)
}

export default PortfolioItemSkeleton;