import { ArrowBox, CategoryBox, CategoryButton, CategoryRow, CategorySection, Divider, FilterButton, MainContainer, MainLayout, NextArrow, PrevArrow, Summary, Title, TitleSection } from "./Main.styled";

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
							<ArrowBox>
								<PrevArrow current={1}>Prev</PrevArrow>
								<NextArrow current={0} last={7}>Next</NextArrow>
							</ArrowBox>

							<CategoryRow>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
								<CategoryButton></CategoryButton>
							</CategoryRow>
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