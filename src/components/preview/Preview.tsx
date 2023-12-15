import PortfolioItem from "../portfolio-item/PortfolioItem";

import { FlexBox, PreviewContainer, PreviewRow, ViewMoreButton } from "./Preview.styled";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import { Section } from "@/types/portfolio";


const PreviewRowColumns = {
	'Android/iOS': 3,
	'Web': 2,
	'Illustration': 2,
	'Graphics': 2,
	'Video': 2,
}

function Preview(props: {section: Section}){
	const section = props.section;
	return(
		<PreviewContainer>
			<FlexBox>
					<h1>{section}</h1>
					<p>
					{introduction[section]}
					</p>
			</FlexBox>

			<PreviewRow column={PreviewRowColumns[section]}>
					<PortfolioItem type={section}/>
					<ViewMoreButton/>
			</PreviewRow>
		</PreviewContainer>
	)
}

export default Preview;