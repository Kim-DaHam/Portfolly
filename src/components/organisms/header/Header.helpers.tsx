import { FiBookmark as BookmarkIcon, FiUser as UserIcon } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Text } from '@/components';
import * as S from "@/components/molecules/popper/Popper.styled";

const PAGE_SHOW_SEARCH_BAR = ['main', 'profile', 'contact', 'portfolios'];
const PAGE_SHOW_SECTION_MENU = ['main'];

export const checkIsShowSearchBarPage = (firstPathName: string) => {
	return PAGE_SHOW_SEARCH_BAR.indexOf(firstPathName) !== -1;
}

export const checkIsShowSectionMenuPage = (firstPathName: string) => {
	return PAGE_SHOW_SECTION_MENU.indexOf(firstPathName) !== -1;
}

export const renderHeaderMenuPopper = (isLogin: boolean, userId: number, popOut: ()=>void) => {
	if(isLogin){
		return (
			<>
				<S.Group>
					<S.Item>
						<S.Box>
							<Text type='common'>Username</Text>
							<Text type='small' color='gray'>email</Text>
						</S.Box>
					</S.Item>
				</S.Group>
				<S.Separator/>
				<S.Group>
					<Link to={`/profile/${userId}?tab=bookmark`}>
						<S.Item onClick={popOut}>
							<BookmarkIcon size={20}/>
							<Text type='common'>북마크</Text>
						</S.Item>
					</Link>

					<Link to={`/profile/${userId}`}>
						<S.Item onClick={popOut}>
							<UserIcon size={20}/>
							<Text type='common'>내 정보</Text>
						</S.Item>
					</Link>
				</S.Group>
				<S.Separator/>
				<S.Group>
					<S.Item onClick={popOut}>
					<Text type='common'>로그아웃</Text>
					</S.Item>
				</S.Group>
			</>
		)
	}

	return (
		<S.Group>
			<S.Item>
				<BookmarkIcon size={20}/>
				<Text type='common'>북마크</Text>
			</S.Item>
		</S.Group>
	)
}