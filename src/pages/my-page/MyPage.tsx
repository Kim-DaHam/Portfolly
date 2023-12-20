import { useState } from "react";

import { Label } from "../portfolio-detail/PortfolioDetail.styeld";

import { ButtonBox, ContactButton, FlexColumBox, FlexCoulumnBox, InformationBox, MyPageLayout, ProfileContentContainer, ProfileDescriptionSection, ProfileImg, ProfileInformationSection, ProfileMainSection, ProfileNavigationSection, SpanBox, UserName, UserProfileContainer } from "./MyPage.styled";
import { Navigation } from "./MyPage.type";
import { renderDescription, renderNavigation } from "./MyPage.utils";

import Rating from "@/components/molecules/rating/Rating";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import { Span } from "@/components/organisms/profile-description/introduce/Introduce.styled";

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('Introduce');

	return(
		<MyPageLayout>
			<Header/>
			<UserProfileContainer>
				<ProfileMainSection>
					<ProfileImg>
						<img/>
					</ProfileImg>

					<FlexCoulumnBox>
						<UserName>User Name</UserName>
						<Rating/>

						{ true && // 본인 아니면
							<ButtonBox>
								<ContactButton color='Black' size='Large'>
									문의하기
								</ContactButton>
							</ButtonBox>
						}
					</FlexCoulumnBox>
				</ProfileMainSection>

				<ProfileNavigationSection>
					{renderNavigation('Expert', setNavigation)}
				</ProfileNavigationSection>

				<ProfileContentContainer>
					<ProfileDescriptionSection>
						{renderDescription(navigation)}
					</ProfileDescriptionSection>

					<ProfileInformationSection>
						<InformationBox>
							<Label>활동 정보</Label>
							<FlexColumBox>
								<SpanBox>
									<Span>총 작업 수</Span>
									<Span>0개</Span>
								</SpanBox>
								<SpanBox>
									<Span>만족도</Span>
									<Span>0%</Span>
								</SpanBox>
								<SpanBox>
									<Span>연락 가능 시간</Span>
									<Span>언제나 가능</Span>
								</SpanBox>
							</FlexColumBox>
						</InformationBox>
					</ProfileInformationSection>
				</ProfileContentContainer>
			</UserProfileContainer>
			<Footer/>
		</MyPageLayout>
	)
}

export default MyPage;