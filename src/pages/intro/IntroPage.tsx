import { sections } from "@/assets/data/fields";
import * as S from "@/pages/intro/IntroPage.styled";

import type { Section } from "@/types";

import { wheelHandler, useTopPortfoliosQuery } from "@/utils";

import { Text, Preview } from "@/components";

export default function IntroPage(){
	const { data: topPortfolioLists } = useTopPortfoliosQuery();

	return(
		<S.Wrapper
			ref={(element)=>{
				if(element !== null) {
					element.addEventListener("wheel", (event:WheelEvent)=>{
						wheelHandler(event, element);
					});
			}}}
		>
			<S.Introduce>
				<S.TextBox>
					<Text size='headingMedium'>Welcome to Portfolly</Text>
					<h1>클라이언트와 파트너 간 소통해요</h1>

					<S.Label>
						<Text size='bodyLarge' color="gray">
							앱 & 웹 & 일러스트 & 사진 & 영상 다양한 미디어 포트폴리오를
						</Text>

						<Text size='bodyLarge' color="gray">
							한곳에서 구경하고 나만의 전문가를 만나요
						</Text>
					</S.Label>
				</S.TextBox>
			</S.Introduce>

			{ topPortfolioLists &&
				sections.map((section: Section, index: number)=>{
					return(
						<div key={index}>
							<S.Divider/>
							<Preview
								section={section}
								portfolios={topPortfolioLists[section]}
							/>
						</div>
					)
			})}
		</S.Wrapper>
	)
}