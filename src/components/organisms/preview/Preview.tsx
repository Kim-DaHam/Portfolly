import { useNavigate } from "react-router-dom";

import { PreviewRowColumns } from "./Preview.constants";
import { PreviewLayout, PreviewRow, TextBox, ViewMoreButton } from "./Preview.styled";
import { Props } from "./Preview.type";
import { renderPortfolioItems } from "./Preview.utils";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import { Heading, Text } from "@/styles/Text.styled";
import { stringToUrlParameter } from "@/utils/path";

export default function Preview({section, portfolios}: Props){
	const navigate = useNavigate();

	const navigateMain = ()=>{
		const sectionParameter = stringToUrlParameter(section);
		navigate(`/main/${sectionParameter}`)
	}

	return(
		<PreviewLayout>
			<TextBox>
				<Heading size='Large'>{section}</Heading>
				<Text size='Medium'>{introduction[section]}</Text>
			</TextBox>

			<PreviewRow $column={PreviewRowColumns[section]}>
				{renderPortfolioItems(section, portfolios, PreviewRowColumns[section])}
			</PreviewRow>

			<ViewMoreButton shape='square' color='white' onClick={navigateMain}>
				More
			</ViewMoreButton>
		</PreviewLayout>
	)
}