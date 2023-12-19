import { MyPageLayout, ProfileContentContainer, ProfileDescriptionSection, ProfileInformationSection, ProfileMainSection, ProfileNavigationSection, UserProfileContainer } from "./MyPage.styled";

import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";

function MyPage(){
	return(
		<MyPageLayout>
			<Header/>
			<UserProfileContainer>
				<ProfileMainSection>
					ProfileMainSection
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