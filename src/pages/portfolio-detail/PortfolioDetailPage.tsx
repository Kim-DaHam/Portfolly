import { useEffect, useState } from "react";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./PortfolioDetailPage.styled";

import ToggleButton from "@/components/atoms/button/ToggleButton";
import Image from "@/components/atoms/image/Image";
import { Button } from "@/components/atoms/index";
import Tag from "@/components/atoms/tag/Tag";
import Profile from "@/components/molecules/profile/Profile";
import Header from "@/components/organisms/header/Header";
import AlertModal from "@/components/organisms/modal/alert-modal/AlertModal";
import { useModal } from "@/hooks";
import { userId } from "@/redux/loginSlice";
import { section } from "@/redux/sectionSlice";
import { Heading, Label, Text } from "@/styles/Text.styled";
import { Portfolio } from "@/types/portfolio";
import { usePortfolioDeleteQuery, usePortfolioDetailQuery } from "@/utils/api-service/portfolio";
import { stringToUrlParameter } from "@/utils/path";

export default function PortfolioDetail(){
	const [hasAuthority, setHasAuthority] = useState(false);

	const user = useSelector(userId);

	const portfolioId = useParams().portfolio_id as string;
	const { data: portfolio } = usePortfolioDetailQuery(portfolioId);
	const deletePorfolioMutation = usePortfolioDeleteQuery(portfolioId);

	const navigate = useNavigate();
	const currentSection = useSelector(section);
	const { isModalOpen, handleModal } = useModal();

	const handleEditButton = () => {
		navigate(`/portfolios/edit?id=${portfolio.id}`, {state: portfolio});
	};

	const deletePortfolio = async () => {
		await deletePorfolioMutation.mutate();
		navigate(`/main/${stringToUrlParameter(currentSection)}`);
	};

	useEffect(() => {
		if(portfolio) {
			const hasAuthority = (user === portfolio.user.id) ? true : false;
			setHasAuthority(hasAuthority);
		}
	}, [portfolio])

	return(
		<S.Wrapper>
			<Header/>
			<S.Content>
				<Button color='transparent' shape='round' onClick={()=>navigate(-1)}>뒤로가기</Button>
				{ portfolio &&
					<S.FlexBox>
						<S.PortfolioSection>
							<S.HtmlContent>
								{portfolio.content}
							</S.HtmlContent>
						</S.PortfolioSection>

						<S.Aside>
							<S.ProfileBox>
								<Profile type='portfolio-detail' user={portfolio.user}/>
								<Button color='white' size='medium' shape='square'>문의하기</Button>
							</S.ProfileBox>

							<S.PortfolioInfoBox>
								<S.TitleBox>
									<Text size='Medium' color='Gray'>{portfolio.category}</Text>
									<Heading size='Small'>{portfolio.title}</Heading>
								</S.TitleBox>

								<S.ButtonGroup>
									<ToggleButton type='like' isToggled={portfolio.isLiked} portfolioId={portfolio.id} currentLikes={portfolio.likes}/>
									<ToggleButton type='bookmark' isToggled={portfolio.isBookmarked} portfolioId={portfolio.id}/>
								</S.ButtonGroup>

								{ hasAuthority &&
									<S.ButtonGroup>
										<S.TextButton onClick={handleEditButton}>수정하기</S.TextButton>
										<S.TextButton onClick={handleModal}>삭제하기</S.TextButton>
									</S.ButtonGroup>
								}

								<Label>태그</Label>
								<S.TagBox>
									{portfolio.tags.map((tag: string, index: number) => {
										return <Tag readOnly value={tag} key={index}/>
									})}
								</S.TagBox>

								<Label>요약</Label>
								<S.SummaryBox>
									{portfolio.summary}
								</S.SummaryBox>

								<Label onClick={()=>navigate(`/profile/${portfolio.user.id}`)}>
									전문가의 다른 포트폴리오
									<ChevronRightIcon size={18}/>
								</Label>
								<S.GridBox>
									{ portfolio.otherPortfolios.map((portfolio: Portfolio) => {
										return (
											<S.GridItem key={portfolio.id} onClick={()=>navigate(`/portfolios/${portfolio.id}`)}>
												<Image size='100%' src={portfolio.thumbnailUrl[0]} shape='foursquare'/>
											</S.GridItem>
										)
									})}
								</S.GridBox>
							</S.PortfolioInfoBox>
						</S.Aside>
					</S.FlexBox>
				}
			</S.Content>
			{ isModalOpen &&
				<AlertModal type='delete' onClick={deletePortfolio} handleModal={handleModal}/>
			}
		</S.Wrapper>
	)
}