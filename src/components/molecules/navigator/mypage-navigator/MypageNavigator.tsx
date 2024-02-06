import { Link, useParams } from 'react-router-dom';

import * as S from '@/components/molecules/navigator/mypage-navigator/MypageNavigator.styled';
import { Authority } from "@/types";

type Props = {
	auth: Authority;
	isMyPage: boolean;
};

export default function MyPageNavigator({auth, isMyPage}: Props) {
	const params = useParams();
	const profileId = params.id as string;
	const tab = params.tab as string;

	return (
		<S.Wrapper>
			<S.Tab $active={!tab}>
				<Link to={`/profile/${profileId}`}>
					소개
				</Link>
			</S.Tab>

			{ auth === 'expert' &&
				<>
				<S.Tab $active={tab === 'portfolios'}>
					<Link to={`/profile/${profileId}/portfolios?page=1`}>
						포트폴리오
					</Link>
				</S.Tab>
				<S.Tab $active={tab === 'reviews'}>
					<Link to={`/profile/${profileId}/reviews?page=1`}>
						리뷰
					</Link>
				</S.Tab>
				</>
			}

			{ isMyPage &&
				<>
				<S.Tab $active={tab === 'management'}>
					<Link to={`/profile/${profileId}/management?page=1`}>
						{auth === 'client' ? '구매 관리' : '판매 관리'}
					</Link>
				</S.Tab>

				<S.Tab $active={tab === 'bookmarks'}>
					<Link to={`/profile/${profileId}/bookmarks?page=1`}>
						북마크
					</Link>
				</S.Tab>
				</>
			}
		</S.Wrapper>
	);
}