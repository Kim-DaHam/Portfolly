import { useNavigate } from "react-router-dom";

import { sectionIntroduction as introduction} from '@/assets/data/phrase';
import * as S from "@/components/organisms/preview/Preview.styled";

import type { Portfolios, Section } from "@/types";

import { toUrlParameter } from "@/utils";

import { Text, PortfolioSlider } from "@/components";

type Props = {
	section: Section,
	portfolios: Portfolios,
};

export default function Preview({section, portfolios}: Props){
	const portfoliosDocKeys = Object.keys(portfolios);
	const previewRowColumns = portfoliosDocKeys.length;

	const navigate = useNavigate();

	const navigateMain = () => {
		const sectionParams = toUrlParameter(section);
		navigate(`/main/${sectionParams}`)
	};

	return(
		<S.Wrapper>
			<S.TextBox>
				<Text size='headingMedium'>{section}</Text>
				<Text size='bodyLarge'>{introduction[section]}</Text>
			</S.TextBox>

			<S.PreviewBox $column={previewRowColumns}>
				{portfoliosDocKeys.length > 0 ?
					portfoliosDocKeys.map((docKey: string) => {
						return (
							<PortfolioSlider
								section={section}
								portfolio={portfolios[docKey]}
								key={docKey}
							/>
						)
					})
					:
					<Text size='bodyLarge' color='gray'>
						여러분이 Portfolly의 첫번째 {section} 포트폴리오가 되어주세요!
					</Text>
				}
			</S.PreviewBox>

			<S.ViewMoreButton color='white' onClick={navigateMain}>
				More
			</S.ViewMoreButton>
		</S.Wrapper>
	)
}