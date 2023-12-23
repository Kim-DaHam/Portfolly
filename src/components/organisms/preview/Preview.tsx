import PortfolioItem from "../portfolio-item/PortfolioItem";

import { PreviewLayout, PreviewRow, TextBox, ViewMoreButton } from "./Preview.styled";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import { Portfolio } from "@/mocks/data/portfolios";
import { Heading, Text } from "@/styles/Text.styled";
import { Section } from "@/types/portfolio";

type Props = {
	section: Section;
	portfolios: Portfolio[];
}

const PreviewRowColumns = {
	'Android/iOS': 3,
	'Web': 2,
	'Illustration': 2,
	'Photo': 2,
	'Video': 2,
}

function Preview({section, portfolios}: Props){
	const renderPortfolioItems = (section: Section, count: number)=> {
		const portfolioItems = [];
		for(let i=0; i < count; i++) {
			portfolioItems.push(
				<PortfolioItem type={section} key={i} portfolio={portfolios[i]}/>
			)
		}

		return portfolioItems;
	};

	return(
		<PreviewLayout>
			<TextBox>
				<Heading size='Large'>{section}</Heading>
				<Text size='Medium'>{introduction[section]}</Text>
			</TextBox>

			<PreviewRow $column={PreviewRowColumns[section]}>
				{renderPortfolioItems(section, PreviewRowColumns[section])}
			</PreviewRow>

			<ViewMoreButton/>
		</PreviewLayout>
	)
}

export default Preview;