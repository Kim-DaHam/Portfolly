import { ButtonGroup, ContentContainer, FlexBox, GridBox, GridItem, HtmlContent, PortfolioDetailContainer, PortfolioDetailLayout, PortfolioSection, ProfileBox, RightSection, SummaryBox, TagBox, TitleBox, UserBox } from "./PortfolioDetail.styled";

import { RoundButton, SquareButton } from "@/components/atoms/button/Button.styled";
import ToggleButton from "@/components/atoms/button/ToggleButton";
import Image from "@/components/atoms/image/Image";
import Header from "@/components/organisms/header/Header";
import { Heading, Label, Text } from "@/styles/Text.styled";

function PortfolioDetail(){
	return(
		<PortfolioDetailLayout>
			<Header/>
			<PortfolioDetailContainer>
				<RoundButton color='Transparency' size='Fit'>뒤로가기</RoundButton>

				<ContentContainer>
					<PortfolioSection>
						<HtmlContent>
							HtmlContentBox
						</HtmlContent>
					</PortfolioSection>

					<RightSection>
						<UserBox>
							<ProfileBox>
								<Image size='5rem' src='' alt=''/>
								<Heading size='Small'>Name</Heading>
							</ProfileBox>
							<SquareButton color='White' size='Medium'>문의하기</SquareButton>
						</UserBox>

						<FlexBox>
							<TitleBox>
								<Text size='Medium' color='Gray'>Category</Text>

								<Heading size='Small'>Title</Heading>

								<ButtonGroup>
									<ToggleButton type='Like'/>
									<ToggleButton type='Bookmark'/>
								</ButtonGroup>
							</TitleBox>

							<Label>Tags</Label>
							<TagBox>
								<div>tag1</div>
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
							</GridBox>
						</FlexBox>
					</RightSection>
				</ContentContainer>
			</PortfolioDetailContainer>
		</PortfolioDetailLayout>
	)
}

export default PortfolioDetail;