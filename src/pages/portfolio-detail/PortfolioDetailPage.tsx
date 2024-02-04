import { useEffect, useState } from "react";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { userState } from "@/redux/loginSlice";
import { section } from "@/redux/sectionSlice";

import * as S from "./PortfolioDetailPage.styled";

import type { Portfolio } from "@/types";

import { useModal, useHtmlContent } from "@/hooks";
import { usePortfolioDeleteQuery, usePortfolioDetailQuery, stringToUrlParameter } from "@/utils";

import { Text, Image, Button, ToggleButton, Tag, Profile, AlertModal } from "@/components";

export default function PortfolioDetail(){
	const [hasAuthority, setHasAuthority] = useState(false);

	const user = useSelector(userState);

	const portfolioId = useParams().portfolio_id as string;
	const { data: portfolio } = usePortfolioDetailQuery(portfolioId);
	const deletePorfolioMutation = usePortfolioDeleteQuery(portfolioId);

	const navigate = useNavigate();
	const currentSection = useSelector(section);
	const { isModalOpen, handleModal } = useModal();
	const { sanitize, setElementInlineStyle } = useHtmlContent();

	const handleEditButton = () => {
		navigate(`/portfolios/edit?id=${portfolio.id}`, {state: portfolio});
	};

	const deletePortfolio = async () => {
		await deletePorfolioMutation.mutate();
		navigate(`/main/${stringToUrlParameter(currentSection)}`);
	};

	useEffect(() => {
		if(portfolio) {
			const hasAuthority = (user.id === portfolio.user.id) ? true : false;
			setHasAuthority(hasAuthority);
		}
	}, [portfolio])

	return(
		<S.Wrapper>
			<S.Content>
				<Button color='transparent' shape='round' onClick={()=>navigate(-1)}>뒤로가기</Button>
				{ portfolio &&
					<S.FlexBox>
						<S.PortfolioSection>
							<S.HtmlContent>
								<div
									dangerouslySetInnerHTML = {{
									__html: sanitize(setElementInlineStyle(portfolio.content)),
								}}>
							</div>
							</S.HtmlContent>
						</S.PortfolioSection>

						<S.Aside>
							<S.ProfileBox>
								<Profile type='portfolio-detail' user={portfolio.user} />
								<Button
									color='white'
									size='medium'
									onClick={() => navigate(`/messages?partner_id=${portfolio.user.id}&related_portfolio_id=${portfolio.id}&page=${1}&type=`)}
								>
									문의하기
								</Button>
							</S.ProfileBox>

							<S.PortfolioInfoBox>
								<S.TitleBox>
									<Text size='bodyMedium' color='gray'>{portfolio.category}</Text>
									<Text size='titleSmall'>{portfolio.title}</Text>
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

								<Text size='label'>태그</Text>
								<S.TagBox>
									{portfolio.tags.map((tag: string, index: number) => {
										return <Tag readOnly value={tag} key={index}/>
									})}
								</S.TagBox>

								<Text size='label'>요약</Text>
								<S.SummaryBox>
									{portfolio.summary}
								</S.SummaryBox>

								<Text size='label' onClick={()=>navigate(`/profile/${portfolio.user.id}`)}>
									전문가의 다른 포트폴리오
									<ChevronRightIcon size={18}/>
								</Text>
								<S.GridBox>
									{ portfolio.otherPortfolios.map((portfolio: Portfolio) => {
										return (
											<S.GridItem key={portfolio.id} onClick={()=>navigate(`/portfolios/${portfolio.id}`)}>
												<Image size='100%' src={portfolio.images[0]} shape='foursquare'/>
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