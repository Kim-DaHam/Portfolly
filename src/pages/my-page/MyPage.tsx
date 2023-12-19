import { ButtonBox, ContactButton, FlexCoulumnBox, MyPageLayout, ProfileContentContainer, ProfileDescriptionSection, ProfileImg, ProfileInformationSection, ProfileMainSection, ProfileNavigationSection, UserName, UserProfileContainer } from "./MyPage.styled";

import Rating from "@/components/molecules/rating/Rating";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";

function MyPage(){
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
					ProfileNavigationSection
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