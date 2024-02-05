import {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { renderDescription } from "@/pages/my-page/MyPage.helpers";
import * as S from "@/pages/my-page/MyPage.styled";
import { userState } from "@/redux/loginSlice";

import { useUserQuery } from "@/utils";

import { ActivityInformation, MyPageNavigator, Profile } from "@/components";

export type Navigation = 'introduce' | 'portfolios' | 'review' | 'management' | 'bookmarks';

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('introduce');

	const params = useParams();
	const profileId = params.id as string;
	const { id: userId } = useSelector(userState);
	const isMyPage = profileId === String(userId) ? true : false;

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
				</S.ProfileSection>

				<MyPageNavigator auth={user.authority} isMyPage={isMyPage}/>

					<S.ContentSection>
						<S.Description>
							{renderDescription(user, navigation)}
						</S.Description>

						<S.Aside>
							<ActivityInformation activity={user.activity} auth={user.authority}/>
						</S.Aside>
					</S.ContentSection>
				</S.Content>
			}
		</S.Wrapper>
	)
}

export default MyPage;