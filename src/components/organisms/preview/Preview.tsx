import { useNavigate } from "react-router-dom";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import * as S from "@/components/organisms/preview/Preview.styled";

import type { Portfolio, Section } from "@/types";

import { stringToUrlParameter } from "@/utils";

import { Text, PortfolioSlider } from "@/components";

type Props = {
	section: Section,
	portfolios: Portfolio[],
};

export const previewRowColumns = {
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
				<Text type='headingMedium'>{section}</Text>
				<Text type='bodyLarge'>{introduction[section]}</Text>
			</S.TextBox>

			<S.PreviewBox $column={previewRowColumns[section]}>
				{portfolios.map((portfolio, index: number) => {
					return <PortfolioSlider section={section} portfolio={portfolio} key={index} />
				})}
			</S.PreviewBox>

			<S.ViewMoreButton color='white' onClick={navigateMain}>
				More
			</S.ViewMoreButton>
		</S.Wrapper>
	)
}