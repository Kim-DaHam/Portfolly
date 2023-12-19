import { useState } from "react";

import { ButtonBox, ContactButton, FlexCoulumnBox, MyPageLayout, Navigation, ProfileContentContainer, ProfileDescriptionSection, ProfileImg, ProfileInformationSection, ProfileMainSection, ProfileNavigationSection, UserName, UserProfileContainer } from "./MyPage.styled";

import Rating from "@/components/molecules/rating/Rating";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";

function MyPage(){
	const [isExpertUser] = useState(true);

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

						{ true &&
							<ButtonBox>
								<ContactButton color='Black'>
									문의하기
								</ContactButton>
							</ButtonBox>
						}
					</FlexCoulumnBox>
				</ProfileMainSection>

				<ProfileNavigationSection>
					<Navigation>소개</Navigation>
					{ isExpertUser && <Navigation>포트폴리오</Navigation> }
					<Navigation>리뷰</Navigation>
					{ isExpertUser ?
						<Navigation>판매 관리</Navigation>
						:
						<Navigation>구매 관리</Navigation>
					}
				</ProfileNavigationSection>

				<ProfileContentContainer>
					<ProfileDescriptionSection>
						ProfileDescriptionSection
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