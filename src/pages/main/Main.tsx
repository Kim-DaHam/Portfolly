import { MainContainer, MainLayout, TitleSection } from "./Main.styled";

import Header from "@/components/header/Header";

function Main(){
    return(
			<MainLayout>
				<Header/>
				<MainContainer>
					<TitleSection>
						<h1>Title</h1>
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