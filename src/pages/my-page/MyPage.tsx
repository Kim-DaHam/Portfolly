import { useState } from "react";

import { ButtonBox, ContactButton, FlexCoulumnBox, MyPageLayout, ProfileContentContainer, ProfileDescriptionSection, ProfileImg, ProfileInformationSection, ProfileMainSection, ProfileNavigationSection, UserName, UserProfileContainer } from "./MyPage.styled";
import { Navigation } from "./MyPage.type";
import { renderDescription, renderNavigation } from "./MyPage.utils";

import Rating from "@/components/molecules/rating/Rating";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";

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
						{renderDescription(navigation)}
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