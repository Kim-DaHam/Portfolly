import { useState } from "react";

import { ContentContainer, InformationSection, MyPageLayout, NavigationSection, ProfileContainer, DescriptionSection, ProfileImg, ProfileMainSection } from "./MyPage.styled";
import { Navigation } from "./MyPage.type";
import { renderDescription, renderNavigation } from "./MyPage.utils";


import { SquareButton } from "@/components/atoms/button/Button.styled";
import Rating from "@/components/molecules/rating/Rating";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import UserInformation from "@/components/organisms/user-information/UserInformation";
import { FlexBox, FlexColumnBox } from "@/styles/Container.styled";
import { Heading } from "@/styles/Text.styled";

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('Introduce');

	return(
		<MyPageLayout>
			<Header/>
			<ProfileContainer>
				<ProfileMainSection>
					<ProfileImg>
						<img/>
					</ProfileImg>

					<FlexColumnBox gap='1rem'>
						<Heading size='Large'>User Name</Heading>
						<Rating/>

						{ true && // 본인 아니면
							<FlexBox justify="right">
								<SquareButton color='Black' size='Large'>
									문의하기
								</SquareButton>
							</FlexBox>
						}
					</FlexColumnBox>
				</ProfileMainSection>

				<NavigationSection>
					{renderNavigation('Expert', setNavigation)}
				</NavigationSection>

				<ContentContainer>
					<DescriptionSection>
						{renderDescription(navigation)}
					</DescriptionSection>

					<InformationSection>
						<UserInformation/>
					</InformationSection>
				</ContentContainer>
			</ProfileContainer>

			<Footer/>
		</MyPageLayout>
	)
}

export default MyPage;