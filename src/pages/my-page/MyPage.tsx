import {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Header, UserInformation, MyPageNavigator, Profile } from "@/components";
import { renderDescription } from "@/pages/my-page/MyPage.helpers";
import * as S from "@/pages/my-page/MyPage.styled";
import { userId as userID } from "@/redux/loginSlice";
import { useUserQuery } from "@/utils";

export type Navigation = 'introduce' | 'portfolios' | 'review' | 'management' | 'bookmarks';

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('introduce');

	const navigate = useNavigate();

	const profileId = window.location.pathname.split('/')[2];
	const loginId = useSelector(userID);
	const isMyPage = profileId === String(loginId) ? true : false;

	const { data: user } = useUserQuery(profileId);

	useEffect(() => {
		if(navigation === 'introduce') {
			navigate(`/profile/${profileId}?tab=${navigation}`);
			return
		}
		navigate(`/profile/${profileId}?tab=${navigation}?page=1`);
	}, [navigation]);

	return(
		<S.Wrapper>
			<Header/>
			{ user &&
			<S.Content>
				<S.ProfileSection>
						<Profile type='my-page' user={user} />

					{ isMyPage &&
						<S.ButtonBox>
							<Button color='black' size='large' shape='square'>
								문의하기
							</Button>
						</S.ButtonBox>
					}
				</S.ProfileSection>

				<MyPageNavigator auth={user.authority} handleNavigator={setNavigation} isMyPage={isMyPage}/>

					<S.ContentSection>
						<S.Description>
							{renderDescription(user, navigation)}
						</S.Description>

						<S.Aside>
							<UserInformation />
						</S.Aside>
					</S.ContentSection>
				</S.Content>
				}
			<Footer/>
		</S.Wrapper>
	)
}

export default MyPage;