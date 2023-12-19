import { useState } from "react";

import { Label } from "../portfolio-detail/PortfolioDetail.styeld";

import { ButtonBox, ContactButton, FlexCoulumnBox, MyPageLayout, ProfileContentContainer, ProfileDescriptionSection, ProfileImg, ProfileInformationSection, ProfileMainSection, ProfileNavigationSection, UserName, UserProfileContainer } from "./MyPage.styled";
import { renderNavigation } from "./MyPage.utils";

import Rating from "@/components/molecules/rating/Rating";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";

function MyPage(){
	const [, setNavigation] = useState('');

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
								<ContactButton color='Black'>
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
						<Label>소개</Label>

						<Label>경력 사항</Label>

						<Label>총 경력</Label>

						<Label>지역</Label>

						<Label>희망 급여</Label>

						<Label>전문 분야 및 상세 분야</Label>

						<Label>보유 기술</Label>
					</ProfileDescriptionSection>

					<ProfileInformationSection>
						ProfileInformationSection
					</ProfileInformationSection>
				</ProfileContentContainer>
			</UserProfileContainer>
			<Footer/>
		</MyPageLayout>
	)
}

export default MyPage;