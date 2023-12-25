import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PreviewRowColumns } from "./Preview.constants";
import { PreviewLayout, PreviewRow, TextBox, ViewMoreButton } from "./Preview.styled";
import { Props } from "./Preview.type";
import { renderPortfolioItems } from "./Preview.utils";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import { setSection } from "@/redux/sectionSlice";
import { Heading, Text } from "@/styles/Text.styled";
import { SectionEndPoint } from "@/types/portfolio";

function Preview({section, portfolios}: Props){
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const navigateMain = ()=>{
		dispatch(setSection(section))
		navigate(`/main/${SectionEndPoint[section]}`)
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

			<ViewMoreButton size='Fit' color='White' onClick={navigateMain}>
				More
			</ViewMoreButton>
		</PreviewLayout>
	)
}

export default Preview;