import { useNavigate } from "react-router-dom";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import { PortfolioThumbnail } from "@/components/molecules";
import * as S from "@/components/organisms/preview/Preview.styled";
import { Heading, Text } from "@/styles/Text.styled";
import { Portfolio, Section } from "@/types/portfolio";
import { stringToUrlParameter } from "@/utils/path";

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
				<Heading size='Large'>{section}</Heading>
				<Text size='Medium'>{introduction[section]}</Text>
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