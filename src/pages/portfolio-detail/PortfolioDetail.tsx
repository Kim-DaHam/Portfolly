import { AskButton, BackButton, ButtonBox, Category, FlexBox, GridBox, GridItem, HtmlContentBox, Label, PortfolioContentSection, PortfolioDetailContainer, PortfolioDetailLayout, RightSideSection, SummaryBox, TagBox, TitleBox, UserBox } from "./PortfolioDetail.styeld";

import ToggleButton from "@/components/atoms/button/ToggleButton";
import Profile from "@/components/molecules/profile/Profile";
import Header from "@/components/organisms/header/Header";

function PortfolioDetail(){
	return(
		<PortfolioDetailLayout>
			<Header/>
			<BackButton color='Transparency' size='Fit'>뒤로가기</BackButton>
			<PortfolioDetailContainer>
				<PortfolioContentSection>
					<HtmlContentBox>
						HtmlContentBox
					</HtmlContentBox>
				</PortfolioContentSection>

				<RightSideSection>
					<UserBox>
						<Profile type='Default'/>
						<AskButton color='White' size='Medium'>문의하기</AskButton>
					</UserBox>

					<FlexBox>
						<TitleBox>
							<Category>
								Category
							</Category>
							<h1>Title</h1>
							<ButtonBox>
								<ToggleButton type='Like'/>
								<ToggleButton type='Bookmark'/>
							</ButtonBox>
						</TitleBox>

						<Label>Tags</Label>
						<TagBox>
							<div>tag1</div>
							<div>tag2</div>
							<div>tag3</div>
							<div>tag4</div>
							<div>tag5</div>
						</TagBox>

						<Label>Summary</Label>
						<SummaryBox>
							SummaryBox
						</SummaryBox>
					</FlexBox>

					<FlexBox>
						<Label>Other Portfolios</Label>
						<GridBox>
							<GridItem>gridItem1</GridItem>
							<GridItem>gridItem2</GridItem>
							<GridItem>gridItem3</GridItem>
							<GridItem>gridItem4</GridItem>
							<GridItem>gridItem5</GridItem>
							<GridItem>gridItem6</GridItem>
							<GridItem>gridItem7</GridItem>
						</GridBox>
					</FlexBox>
				</RightSideSection>
			</PortfolioDetailContainer>
		</PortfolioDetailLayout>
	)
}

export default PortfolioDetail;