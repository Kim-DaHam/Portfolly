import * as S from "./IntroPage.styled";

import { Preview } from "@/components/organisms";
import { Section } from "@/types";
import { wheelHandler, useTopPortfoliosQuery } from "@/utils";

const sections: Array<Section> = ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'];

export default function IntroPage(){
	const { data: topPortfolioLists } = useTopPortfoliosQuery();

	return(
		<S.Wrapper ref={(element)=>{
			if(element !== null) {
				element.addEventListener("wheel", (event:WheelEvent)=>{
					wheelHandler(event, element)
				});
			}}}
		>
			<S.Introduce>
				<h1>Welcome to Portfolly</h1>
				<h2>클라이언트와 파트너 간 소통해요</h2>
			</S.Introduce>

			{ topPortfolioLists &&
				sections.map((section: Section, index: number)=>{
					return(
						<div key={index}>
							<S.Divider/>
							<Preview section={section} portfolios={topPortfolioLists[section]}/>
						</div>
					)
			})}
		</S.Wrapper>
	)
}