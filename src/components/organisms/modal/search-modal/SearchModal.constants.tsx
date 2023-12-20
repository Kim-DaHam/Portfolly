import { Filter, SearchFilter } from "./SearchModal.type";

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