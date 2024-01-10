import { useParams } from "react-router-dom";

import { ButtonGroup, ContentContainer, FlexBox, GridBox, GridItem, HtmlContent, PortfolioDetailContainer, PortfolioDetailLayout, PortfolioSection, ProfileBox, RightSection, SummaryBox, TagBox, TitleBox, UserBox } from "./PortfolioDetailPage.styled";

import { RoundButton, SquareButton } from "@/components/atoms/button/Button.styled";
import ToggleButton from "@/components/atoms/button/ToggleButton";
import Image from "@/components/atoms/image/Image";
import Tag from "@/components/atoms/tag/Tag";
import Profile from "@/components/molecules/profile/Profile";
import Header from "@/components/organisms/header/Header";
import { Heading, Label, Text } from "@/styles/Text.styled";
import { Portfolio } from "@/types/portfolio";
import { usePortfolioDetailQuery } from "@/utils/api-service/portfolio";

function PortfolioDetail(){
	const portfolioId = useParams().portfolio_id as string;
	const { data: portfolio } = usePortfolioDetailQuery(portfolioId);

	return(
		<PortfolioDetailLayout>
			<Header/>
			<PortfolioDetailContainer>
				<RoundButton color='Transparency' size='Fit'>뒤로가기</RoundButton>
				{ portfolio &&
					<ContentContainer>
						<PortfolioSection>
							<HtmlContent>
								{portfolio.content}
							</HtmlContent>
						</PortfolioSection>

						<RightSection>
							<UserBox>
								<ProfileBox>
									<Profile type='portfolio-detail' user={portfolio.user}/>
								</ProfileBox>
								<SquareButton color='White' size='Medium'>문의하기</SquareButton>
							</UserBox>

							<FlexBox>
								<TitleBox>
									<Text size='Medium' color='Gray'>{portfolio.category}</Text>

									<Heading size='Small'>{portfolio.title}</Heading>

									<ButtonGroup>
										<ToggleButton type='Like'/>
										<ToggleButton type='Bookmark'/>
									</ButtonGroup>
								</TitleBox>

								<Label>태그</Label>
								<TagBox>
									{portfolio.tags.map((tag: string, index: number) => {
										return <Tag readOnly value={tag} key={index}/>
									})}
								</TagBox>

								<Label>요약</Label>
								<SummaryBox>
									{portfolio.summary}
								</SummaryBox>
							</FlexBox>

							<FlexBox>
								<Label>전문가의 다른 포트폴리오</Label>
								<GridBox>
									{ portfolio.otherPortfolios.map((portfolio: Portfolio) => {
										return (
											<GridItem key={portfolio.id}>
												<Image size='100%' src={portfolio.thumbnailUrl[0]} shape='foursquare'/>
											</GridItem>
										)
									})}
								</GridBox>
							</FlexBox>
						</RightSection>
					</ContentContainer>

				}
			</PortfolioDetailContainer>
		</PortfolioDetailLayout>
	)
}

export default PortfolioDetail;