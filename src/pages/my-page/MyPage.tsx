import { Suspense, lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Header, UserInformation, ProfileSkeleton } from "@/components/";
import { renderDescription, renderNavigation } from "@/pages/my-page/MyPage.helpers";
import * as S from "@/pages/my-page/MyPage.styled";
import { authority, userId as userID } from "@/redux/loginSlice";
import { useUserQuery } from "@/utils";

const Profile = lazy(() => import('@/components/molecules/profile/Profile'));

export type Navigation = 'introduce' | 'portfolios' | 'review' | 'management' | 'bookmarks';

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('introduce');

	const navigate = useNavigate();

	const profileId = window.location.pathname.split('/')[2];
	const loginId = useSelector(userID);
	const isMyPage = profileId === String(loginId) ? true : false;

	const { data: user } = useUserQuery(profileId);

	useEffect(() => {
		navigate(`/profile/${profileId}?tab=${navigation}`);
	}, [navigation]);

	return(
		<S.Wrapper>
			<Header/>
			<S.Content>
				<S.ProfileSection>
					<Suspense fallback={<ProfileSkeleton type='my-page'/>}>
						<Profile type='my-page' user={user} />
					</Suspense>

					{ isMyPage &&
						<S.ButtonBox>
							<Button color='black' size='large' shape='square'>
								문의하기
							</Button>
						</S.ButtonBox>
					}
				</S.ProfileSection>

				<S.NavigationSection>
					{renderNavigation(user.authority, setNavigation, isMyPage)}
				</S.NavigationSection>

				<S.ContentContainer>
					<S.DescriptionSection>
						{renderDescription(navigation, user)}
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