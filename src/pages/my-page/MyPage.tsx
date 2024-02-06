import {useEffect, useState } from "react";
import { FiArrowLeft as LeftArrowIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { renderDescription } from "@/pages/my-page/MyPage.helpers";
import * as S from "@/pages/my-page/MyPage.styled";
import { userState } from "@/redux/loginSlice";

import { useUserQuery } from "@/utils";

import { ActivityInformation, MyPageNavigator, Profile } from "@/components";

export type Navigation = 'introduce' | 'portfolios' | 'review' | 'management' | 'bookmarks';

function MyPage(){
	const [navigation , setNavigation] = useState<Navigation>('introduce');
	const [prevUrl, setPrevUrl] = useState<string | null>(null);

	const location = useLocation();
	const navigate = useNavigate();
	const params = useParams();
	const profileId = params.id as string;

	const { id: userId } = useSelector(userState);
	const { data: user } = useUserQuery(profileId);
	const isMyPage = profileId === String(userId) ? true : false;

	useEffect(() => {
		const tab = params.tab as Navigation;
		setNavigation(tab || 'introduce');
	});

	useEffect(() => {
		const prevUrl = location.state?.prevUrl;

		if(!prevUrl) return;
		const route = new URL(prevUrl)?.pathname + new URL(prevUrl)?.search;
		setPrevUrl(route);
	}, []);

	if(!user) return;

	return(
		<S.Wrapper>
			<LeftArrowIcon
				size={20}
				onClick={() => navigate(prevUrl || '/main/android-ios')}
			/>

			<S.ProfileSection>
				<Profile type='my-page' user={user!} />
			</S.ProfileSection>

			<S.Divider />

			<MyPageNavigator auth={user?.authority} isMyPage={isMyPage}/>

			<S.ContentSection>
				<S.Description>
					{renderDescription(user!, navigation)}
				</S.Description>

				<S.Aside>
					<ActivityInformation activity={user?.activity} auth={user?.authority}/>
				</S.Aside>
			</S.ContentSection>
		</S.Wrapper>
	)
}

export default MyPage;