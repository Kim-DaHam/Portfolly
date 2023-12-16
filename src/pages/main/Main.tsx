import { MainContainer, MainLayout, Summary, Title, TitleSection } from "./Main.styled";

import Header from "@/components/header/Header";

function Main(){
    return(
			<MainLayout>
				<Header/>
				<MainContainer>
					<TitleSection>
						<Title>Title</Title>
						<Summary>간단한 설명 blabla</Summary>
					</TitleSection>

					{/* <CategorySection>

					</CategorySection>

					<PortfolioSection>
						<Grid>

						</Grid>
					</PortfolioSection> */}

				</MainContainer>

			</MainLayout>
    )
}

export default Main;