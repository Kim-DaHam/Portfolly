import * as S from '@/components/molecules/navigator/mypage-navigator/MypageNavigator.styled';
import { Navigation } from '@/pages/my-page/MyPage';
import { Authority, SetState } from "@/types";

type Props = {
	auth: Authority;
	handleNavigator: SetState<Navigation>;
	isMyPage: boolean;
};

export default function MyPageNavigator({auth, handleNavigator, isMyPage}: Props) {
	return (
		<S.Wrapper>
			<S.Link onClick={()=>handleNavigator('introduce')}>
				소개
			</S.Link>

			{ auth === 'expert' &&
				<>
					<S.Link onClick={()=>handleNavigator('portfolios')} >
						포트폴리오
					</S.Link>
					<S.Link onClick={()=>handleNavigator('review')}>
						리뷰
					</S.Link>
				</>
			}

			{ isMyPage &&
				<>
				<S.Link onClick={()=>handleNavigator('management')}>
					{auth === 'client' ? '구매 관리' : '판매 관리'}
				</S.Link>

				<S.Link onClick={()=>handleNavigator('bookmarks')}>
					북마크
				</S.Link>
				</>
			}
		</S.Wrapper>
	);
}