import { Content, Filter } from "@/components/organisms/modal/search-modal";

export type SearchFilter = {
	[key in Filter]: {
		name: string;
		contentType: Content;
	}
};

export const searchFilterList: Array<Filter> = ['Trending', 'AppCategory', 'UserTags'];

export const searchFilter: SearchFilter = {
	Trending: {
		name: 'Trending',
		contentType: 'Trending'
	},
	AppCategory: {
		name: 'App Category',
		contentType: 'List'
	},
	UserTags: {
		name: 'Tags',
		contentType: 'List'
	},
	Search: {
		name: '',
		contentType: 'Search'
	}
};