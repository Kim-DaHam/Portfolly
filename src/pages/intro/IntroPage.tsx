import * as S from "./IntroPage.styled";

import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import Preview from "@/components/organisms/preview/Preview";
import { Section } from "@/types/portfolio";
import { useTopPortfoliosQuery } from "@/utils/api-service/portfolio";
import { wheelHandler } from "@/utils/wheelHandler";

const sections: Array<Section> = ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'];

export default function IntroPage(){
	const { data: topPortfolioLists } = useTopPortfoliosQuery();

	return(
		<S.IntroLayout ref={(element)=>{
			if(element !== null) {
				element.addEventListener("wheel", (event:WheelEvent)=>{
					wheelHandler(event, element)
				});
			}}}
		>
			<Header/>

			<S.IntroduceContainer>
				<h1>Welcome to Portfolly</h1>
				<h2>클라이언트와 파트너 간 소통해요</h2>
			</S.IntroduceContainer>

			{ topPortfolioLists &&
				sections.map((section: Section, index: number)=>{
					return(
						<div key={index}>
							<S.Divider/>
							<Preview section={section} portfolios={topPortfolioLists[section]}/>
						</div>
					)
			})}
			<Footer/>
		</S.IntroLayout>
	)
}