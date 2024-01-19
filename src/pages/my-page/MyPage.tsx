import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Header, UserInformation, Profile } from "@/components/";
import { renderDescription, renderNavigation } from "@/pages/my-page/MyPage.helpers";
import * as S from "@/pages/my-page/MyPage.styled";
import { authority, userId as userID } from "@/redux/loginSlice";

export type User = 'expert' | 'client';
export type Navigation = 'introduce' | 'portfolios' | 'review' | 'management' | 'bookmarks';

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('introduce');

	const navigate = useNavigate();

	const parameterId = window.location.pathname.split('/')[2];
	const auth = useSelector(authority);
	const userId = useSelector(userID);
	const isMyPage = parameterId === String(userId) ? true : false;

	useEffect(() => {
		navigate(`/profile/${parameterId}?tab=${navigation}`);
	}, [navigation]);

	return(
		<S.Wrapper>
			<Header/>
			<S.Content>
				<S.ProfileSection>
					<Profile type='my-page' user={''} />
					{ isMyPage &&
						<S.ButtonBox>
							<Button color='black' size='large' shape='square'>
								문의하기
							</Button>
						</S.ButtonBox>
					}
				</S.ProfileSection>

				<S.NavigationSection>
					{renderNavigation(auth, setNavigation, isMyPage)}
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