import { Content, Filter } from "@/components/organisms/modal/search-modal";

export type SearchFilter = {
	[key in Filter]: {
		name: string;
		icon: JSX.Element;
		contentType: Content;
	}
};

export const searchFilterList: Array<Filter> = ['Trending', 'AppCategory', 'UserTags'];

export const searchFilter: SearchFilter = {
	Trending: {
		name: 'Trending',
		icon: (<></>),
		contentType: 'Trending'
	},
	AppCategory: {
		name: 'App Category',
		icon: (<></>),
		contentType: 'List'
	},
	UserTags: {
		name: 'User Tags',
		icon: (<></>),
		contentType: 'List'
	},
	Search: {
		name: "",
		icon: (<></>),
		contentType: 'Search'
	}
};