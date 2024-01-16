import { FiBookmark as BookmarkIcon, FiUser as UserIcon } from "react-icons/fi";

import { Text } from '@/components';
import { Group, Item, Separator } from "@/components/molecules/popper/Popper.styled";
import { FlexColumnBox } from "@/styles/Container.styled";

const PAGE_SHOW_SEARCH_BAR = ['main', 'profile', 'contact', 'portfolios'];
const PAGE_SHOW_SECTION_MENU = ['main'];

export const checkIsShowSearchBarPage = (firstPathName: string) => {
	return PAGE_SHOW_SEARCH_BAR.indexOf(firstPathName) !== -1;
}

export const checkIsShowSectionMenuPage = (firstPathName: string) => {
	return PAGE_SHOW_SECTION_MENU.indexOf(firstPathName) !== -1;
}

export const renderHeaderMenuPopper = (isLogin: boolean) => {
	if(isLogin){
		return (
			<>
				<Group>
					<Item>
						<FlexColumnBox>
							<Text type='common'>Username</Text>
							<Text type='small' color='gray'>email</Text>
						</FlexColumnBox>
					</Item>
				</Group>
				<Separator/>
				<Group>
					<Item>
						<BookmarkIcon size={20}/>
						<Text type='common'>북마크</Text>
					</Item>
					<Item>
						<UserIcon size={20}/>
						<Text type='common'>내 정보</Text>
					</Item>
				</Group>
				<Separator/>
				<Group>
					<Item>
					<Text type='common'>로그아웃</Text>
					</Item>
				</Group>
			</>
		)
	}

	return (
		<Group>
			<Item>
				<BookmarkIcon size={20}/>
				<Text type='common'>북마크</Text>
			</Item>
		</Group>
	)
}