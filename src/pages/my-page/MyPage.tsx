import { useState } from "react";

import { Text, Button, Rating, Footer, Header, UserInformation } from "@/components/";
import { renderDescription, renderNavigation } from "@/pages/my-page/MyPage.helpers";
import * as S from "@/pages/my-page/MyPage.styled";

export type User = 'expert' | 'client';
export type Navigation = 'Introduce' | 'Portfolio' | 'Review' | 'Management';

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('Introduce');

	return(
		<S.Wrapper>
			<Header/>
			<S.Content>
				<S.ProfileMainSection>
					<S.ProfileImg>
						<img/>
					</S.ProfileImg>

					<S.Box>
						<Text type='title'>User Name</Text>
						<Rating/>

						{ true && // 본인 아니면
							<S.ButtonBox>
								<Button color='black' size='large' shape='square'>
									문의하기
								</Button>
							</S.ButtonBox>
						}
					</S.Box>
				</S.ProfileMainSection>

				<S.NavigationSection>
					{renderNavigation('expert', setNavigation)}
				</S.NavigationSection>

				<S.ContentContainer>
					<S.DescriptionSection>
						{renderDescription(navigation)}
					</S.DescriptionSection>

					<S.InformationSection>
						<UserInformation/>
					</S.InformationSection>
				</S.ContentContainer>
			</S.Content>

			<Footer/>
		</S.Wrapper>
	)
}

export default MyPage;