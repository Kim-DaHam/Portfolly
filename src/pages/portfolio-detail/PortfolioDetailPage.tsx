import { Navigate, useNavigate, useParams } from "react-router-dom";

import { Aside, ButtonGroup, Content, FlexBox, GridBox, GridItem, HtmlContent, PortfolioInfoBox, PortfolioSection, ProfileBox, SummaryBox, TagBox, TitleBox, Wrapper } from "./PortfolioDetailPage.styled";

import { RoundButton, SquareButton } from "@/components/atoms/button/Button.styled";
import ToggleButton from "@/components/atoms/button/ToggleButton";
import Image from "@/components/atoms/image/Image";
import Tag from "@/components/atoms/tag/Tag";
import Profile from "@/components/molecules/profile/Profile";
import Header from "@/components/organisms/header/Header";
import { Heading, Label, Text } from "@/styles/Text.styled";
import { Portfolio } from "@/types/portfolio";
import { usePortfolioDetailQuery } from "@/utils/api-service/portfolio";

export default function PortfolioDetail(){
	const portfolioId = useParams().portfolio_id as string;
	const { data: portfolio } = usePortfolioDetailQuery(portfolioId);

	const navigate = useNavigate();

	return(
		<Wrapper>
			<Header/>
			<Content>
				<RoundButton color='Transparency' size='Fit' onClick={()=>navigate(-1)}>뒤로가기</RoundButton>
				{ portfolio &&
					<FlexBox>
						<PortfolioSection>
							<HtmlContent>
								{portfolio.content}
							</HtmlContent>
						</PortfolioSection>

						<Aside>
							<ProfileBox>
								<Profile type='portfolio-detail' user={portfolio.user}/>
								<SquareButton color='White' size='Medium'>문의하기</SquareButton>
							</ProfileBox>

							<PortfolioInfoBox>
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

								<Label>이 전문가의 다른 포트폴리오 {'>'}</Label>
								<GridBox>
									{ portfolio.otherPortfolios.map((portfolio: Portfolio) => {
										return (
											<GridItem key={portfolio.id}>
												<Image size='100%' src={portfolio.thumbnailUrl[0]} shape='foursquare'/>
											</GridItem>
										)
									})}
								</GridBox>
							</PortfolioInfoBox>
						</Aside>
					</FlexBox>
				}
			</Content>
		</Wrapper>
	)
}