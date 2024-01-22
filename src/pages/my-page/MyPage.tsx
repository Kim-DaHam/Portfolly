import {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Button, ActivityInformation, MyPageNavigator, Profile } from "@/components";
import { renderDescription } from "@/pages/my-page/MyPage.helpers";
import * as S from "@/pages/my-page/MyPage.styled";
import { userId as userID } from "@/redux/loginSlice";
import { useUserQuery } from "@/utils";

export type Navigation = 'introduce' | 'portfolios' | 'review' | 'management' | 'bookmarks';

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('introduce');

	const params = useParams();
	const profileId = params.id as string;
	const loginId = useSelector(userID);
	const isMyPage = profileId === String(loginId) ? true : false;

	const { data: user } = useUserQuery(profileId);

	useEffect(() => {
		const tab = params.tab as Navigation;
		setNavigation(tab || 'introduce');
	});

	return(
		<S.Wrapper>
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

				<MyPageNavigator auth={user.authority} isMyPage={isMyPage}/>

					<S.ContentSection>
						<S.Description>
							{renderDescription(user, navigation)}
						</S.Description>

						<S.Aside>
							<ActivityInformation activity={user.activity}/>
						</S.Aside>
					</S.ContentSection>
				</S.Content>
				}
		</S.Wrapper>
	)
}

export default MyPage;