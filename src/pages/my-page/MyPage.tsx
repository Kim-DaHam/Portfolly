import { useState } from "react";

import * as S from "./MyPage.styled";
import { Navigation } from "./MyPage.type";
import { renderDescription, renderNavigation } from "./MyPage.utils";


import { Button } from "@/components/atoms/index";
import Rating from "@/components/molecules/rating/Rating";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import UserInformation from "@/components/organisms/user-information/UserInformation";
import { FlexBox, FlexColumnBox } from "@/styles/Container.styled";
import { Heading } from "@/styles/Text.styled";

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('Introduce');

	return(
		<S.MyPageLayout>
			<Header/>
			<S.ProfileContainer>
				<S.ProfileMainSection>
					<S.ProfileImg>
						<img/>
					</S.ProfileImg>

					<FlexColumnBox gap='1rem'>
						<Heading size='Large'>User Name</Heading>
						<Rating/>

						{ true && // 본인 아니면
							<FlexBox justify="right">
								<Button color='black' size='large' shape='square'>
									문의하기
								</Button>
							</FlexBox>
						}
					</FlexColumnBox>
				</S.ProfileMainSection>

				<S.NavigationSection>
					{renderNavigation('Expert', setNavigation)}
				</S.NavigationSection>

				<S.ContentContainer>
					<S.DescriptionSection>
						{renderDescription(navigation)}
					</S.DescriptionSection>

					<S.InformationSection>
						<UserInformation/>
					</S.InformationSection>
				</S.ContentContainer>
			</S.ProfileContainer>

			<Footer/>
		</S.MyPageLayout>
	)
}

export default MyPage;