import { Filter, SearchFilter } from "./SearchModal.type";

export const searchFilterList: Array<Filter> = ['Trending', 'AppCategory', 'UserTags'];

export const searchFilter: SearchFilter = {
	Trending: {
		name: 'Trending',
		logo: (<></>),
		contentType: 'Trending'
	},
	AppCategory: {
		name: 'App Category',
		logo: (<></>),
		contentType: 'List'
	},
	UserTags: {
		name: 'User Tags',
		logo: (<></>),
		contentType: 'List'
	},
	Search: {
		name: "",
		logo: (<></>),
		contentType: 'Search'
	}
};