import { useEffect } from "react";
import { FiChevronRight as ChevronRightIcon , FiArrowLeft as LeftArrowIcon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "@/pages/portfolio-detail/PortfolioDetailPage.styled";

import type { Portfolio } from "@/types";

import { useHtmlContent } from "@/hooks";
import { setAlert, userState, section } from "@/redux";
import { usePortfolioDeleteQuery, usePortfolioDetailQuery, toUrlParameter } from "@/utils";

import { Text, Image, Button, ToggleButton, Tag, Profile } from "@/components";

export default function PortfolioDetail(){
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector(userState);
	const portfolioId = useParams().portfolio_id as string;
	const currentSection = useSelector(section);

	const { sanitize, setElementInlineStyle } = useHtmlContent();
	const { data: portfolio, isError } = usePortfolioDetailQuery(portfolioId);

	const deletePorfolioMutation = usePortfolioDeleteQuery(portfolioId);

	const handleEditButton = () => {
		navigate(`/portfolios/edit?id=${portfolio?.id}`, {state: portfolio});
	};

	const handleDeleteButton = () => {
		dispatch(setAlert({
			type: 'delete',
			onConfirm: deletePortfolio,
		}))
	}

	const deletePortfolio = async () => {
		await deletePorfolioMutation.mutate();
		navigate(`/main/${toUrlParameter(currentSection)}`);
	};

	useEffect(() => {
		if(isError) {
			dispatch(setAlert({
				type: 'error',
				onConfirm: () => navigate(-1),
			}))
		}
	}, [isError]);

	return(
		<S.Wrapper>
			<LeftArrowIcon
				size={20}
				onClick={()=>navigate(-1)}
			/>

			<S.Content>
				<S.PortfolioSection>
					<S.HtmlContent>
						<Text size='bodyMedium'
							dangerouslySetInnerHTML = {{
							__html: sanitize(setElementInlineStyle(portfolio?.content || '')),
						}}>
					</Text>
					</S.HtmlContent>
				</S.PortfolioSection>

				<S.Aside>
					<S.ProfileBox>
						<Profile type='portfolio-detail' user={portfolio?.user} />
						<Button
							color='black'
							size='medium'
							onClick={() => navigate(`/messages?
							partner_id=${portfolio?.user.id}&
							related_portfolio_id=${portfolio?.id}&
							page=${1}&type=`)}
						>
							문의하기
						</Button>
					</S.ProfileBox>

					<S.TitleBox>
						<Text size='bodyMedium' color='gray'>
							{portfolio?.section} {'〉'} {portfolio?.category}
						</Text>
						<Text size='titleSmall'>
							{portfolio?.title}
						</Text>

						<S.ButtonGroup>
							<ToggleButton
								type='like'
								portfolioId={portfolio?.id}
								isToggled={portfolio?.isLiked}
								currentLikes={portfolio?.likes}
							/>
							<ToggleButton
								type='bookmark'
								portfolioId={portfolio?.id}
								isToggled={portfolio?.isBookmarked}
							/>
						</S.ButtonGroup>

						{ user?.id === portfolio?.user?.id &&
							<S.ButtonGroup>
								<Text size='bodyMedium' color='lightgray' onClick={handleEditButton} cursor>
									수정하기
								</Text>
								<Text size='bodyMedium' color='lightgray' onClick={handleDeleteButton} cursor>
									삭제하기
								</Text>
							</S.ButtonGroup>
						}
					</S.TitleBox>

					<S.InformationBox>

						<Text size='label'>태그</Text>
						<S.TagBox>
							{portfolio?.tags?.map((tag: string, index: number) => {
								return <Tag readOnly value={tag} key={index}/>
							})}
						</S.TagBox>

						<Text size='label'>요약</Text>
						<S.SummaryBox>
							<Text size='bodyMedium' >
								{portfolio?.summary}
							</Text>
						</S.SummaryBox>

						<Text
							cursor
							size='label'
							onClick={()=>navigate(`/profile/${portfolio?.user.id}`)}
						>
							전문가의 다른 포트폴리오
							<ChevronRightIcon size={18}/>
						</Text>
						<S.GridBox>
							{ portfolio?.otherPortfolios?.map((portfolio: Portfolio) => {
								return (
									<S.GridItem
										key={portfolio?.id}
										onClick={() => navigate(`/portfolios/${portfolio?.id}`)}
									>
										<Image
											size='100%'
											src={portfolio?.images[0]}
											alt='portfolio thumbnail'
											shape='foursquare'
										/>
									</S.GridItem>
								)
							})}
						</S.GridBox>
					</S.InformationBox>
				</S.Aside>
			</S.Content>
		</S.Wrapper>
	)
}