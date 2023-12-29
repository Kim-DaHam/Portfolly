import { portfolios } from "./IntroPage.constants";
import { Divider, IntroLayout, IntroduceContainer } from "./IntroPage.styled";
import { separatePortfolioSection } from "./IntroPage.utils";

import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import Preview from "@/components/organisms/preview/Preview";
import { Section } from "@/types/portfolio";
import { useTopPortfoliosQuery } from "@/utils/api-service/portfolio";
import { wheelHandler } from "@/utils/wheelHandler";

const sections: Array<Section> = ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'];

function IntroPage(){
	const { data } = useTopPortfoliosQuery();
	const topPortfolioList = data;

	separatePortfolioSection(topPortfolioList);

	return(
		<IntroLayout ref={(element)=>{
			if(element !== null) {
				element.addEventListener("wheel", (event:WheelEvent)=>{
					wheelHandler(event, element)
				});
			}}}
		>
			<Header/>

			<IntroduceContainer>
				<h1>Welcome to Portfolly</h1>
				<h2>클라이언트와 파트너 간 소통해요</h2>
			</IntroduceContainer>

			{ sections.map((section: Section, index: number)=>{
				return(
					<div key={index}>
						<Divider/>
						<Preview section={section} portfolios={portfolios[section]}/>
					</div>
				)
			})}
			<Footer/>
		</IntroLayout>
	)
}

export default IntroPage;