import { FiBookmark as BookmarkIcon, FiUser as UserIcon } from "react-icons/fi";

import { PAGE_SHOW_SEARCH_BAR, PAGE_SHOW_SECTION_MENU } from "./Header.constants";

import { Group, Item, Separator } from "@/components/molecules/popper/Popper.styled";
import { FlexColumnBox } from "@/styles/Container.styled";
import { Text } from '@/styles/Text.styled';

export const checkIsShowSearchBarPage = (firstPathName: string)=> {
	return PAGE_SHOW_SEARCH_BAR.indexOf(firstPathName) !== -1;
}

export const checkIsShowSectionMenuPage = (firstPathName: string)=> {
	return PAGE_SHOW_SECTION_MENU.indexOf(firstPathName) !== -1;
}

export const renderHeaderMenuPopper = (isLogin: boolean)=>{
	if(isLogin){
		return (
			<>
				<Group>
					<Item>
						<FlexColumnBox>
							<Text size='Medium'>Username</Text>
							<Text size='Small' color='Gray'>email</Text>
						</FlexColumnBox>
					</Item>
				</Group>
				<Separator/>
				<Group>
					<Item>
						<BookmarkIcon size={20}/>
						<Text size='Medium'>북마크</Text>
					</Item>
					<Item>
						<UserIcon size={20}/>
						<Text size='Medium'>내 정보</Text>
					</Item>
				</Group>
				<Separator/>
				<Group>
					<Item>
					<Text size='Medium'>로그아웃</Text>
					</Item>
				</Group>
			</>
		)
	}

	return (
		<Group>
			<Item>
				<BookmarkIcon size={20}/>
				<Text size='Medium'>북마크</Text>
			</Item>
		</Group>
	)
}