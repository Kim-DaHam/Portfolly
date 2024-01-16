import { useNavigate } from "react-router-dom";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import { Text, PortfolioThumbnail } from "@/components";
import * as S from "@/components/organisms/preview/Preview.styled";
import { Portfolio, Section } from "@/types";
import { stringToUrlParameter } from "@/utils";

type Props = {
	section: Section,
	portfolios: Portfolio[],
};

export const PreviewRowColumns = {
	'Android/iOS': 3,
	'Web': 2,
	'Illustration': 2,
	'Photo': 2,
	'Video': 2,
}

export default function Preview({section, portfolios}: Props){
	const navigate = useNavigate();

	const navigateMain = ()=>{
		const sectionParameter = stringToUrlParameter(section);
		navigate(`/main/${sectionParameter}`)
	}

	return(
		<S.Wrapper>
			<S.TextBox>
				<Text type='title'>{section}</Text>
				<Text type='common'>{introduction[section]}</Text>
			</S.TextBox>

			<S.PreviewBox $column={PreviewRowColumns[section]}>
				{portfolios.map((portfolio, index: number) => {
					return <PortfolioThumbnail section={section} key={index} portfolio={portfolio}/>
				})}
			</S.PreviewBox>

			<S.ViewMoreButton shape='square' color='white' onClick={navigateMain}>
				More
			</S.ViewMoreButton>
		</S.Wrapper>
	)
}