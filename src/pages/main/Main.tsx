import { CategoryBox, CategorySection, Divider, FilterButton, MainContainer, MainLayout, Summary, Title, TitleSection } from "./Main.styled";

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

					<CategorySection>
						<FilterButton>
							Filters
						</FilterButton>

						<Divider/>

						<CategoryBox>
							<div>category 1</div>
							<div>category 2</div>
						</CategoryBox>
					</CategorySection>

					{/* <PortfolioSection>
						<Grid>

						</Grid>
					</PortfolioSection> */}

				</MainContainer>

			</MainLayout>
    )
}

export default Main;