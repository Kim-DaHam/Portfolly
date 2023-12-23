import { PreviewRowColumns } from "./Preview.constants";
import { PreviewLayout, PreviewRow, TextBox, ViewMoreButton } from "./Preview.styled";
import { Props } from "./Preview.type";
import { renderPortfolioItems } from "./Preview.utils";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import { Heading, Text } from "@/styles/Text.styled";

function Preview({section, portfolios}: Props){
	return(
		<PreviewLayout>
			<TextBox>
				<Heading size='Large'>{section}</Heading>
				<Text size='Medium'>{introduction[section]}</Text>
			</TextBox>

			<PreviewRow $column={PreviewRowColumns[section]}>
				{renderPortfolioItems(section, portfolios, PreviewRowColumns[section])}
			</PreviewRow>

			<ViewMoreButton/>
		</PreviewLayout>
	)
}

export default Preview;