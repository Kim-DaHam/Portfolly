import { useNavigate } from "react-router-dom";

import { PreviewRowColumns } from "./Preview.constants";
import { PreviewLayout, PreviewRow, TextBox, ViewMoreButton } from "./Preview.styled";
import { Props } from "./Preview.type";
import { renderPortfolioItems } from "./Preview.utils";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import { Heading, Text } from "@/styles/Text.styled";
import { SectionEndPoint } from "@/types/portfolio";

function Preview({section, portfolios}: Props){
	const navigate = useNavigate();

	return(
		<PreviewLayout>
			<TextBox>
				<Heading size='Large'>{section}</Heading>
				<Text size='Medium'>{introduction[section]}</Text>
			</TextBox>

			<PreviewRow $column={PreviewRowColumns[section]}>
				{renderPortfolioItems(section, portfolios, PreviewRowColumns[section])}
			</PreviewRow>

			<ViewMoreButton size='Fit' color='White' onClick={()=>navigate(`/main/${SectionEndPoint[section]}`)}>
				More
			</ViewMoreButton>
		</PreviewLayout>
	)
}

export default Preview;