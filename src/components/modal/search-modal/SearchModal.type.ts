export type Filter = 'Trending' | 'AppCategory' | 'UserTags' | 'Search';
export type Content = 'Trending' | 'List' | 'Search';

export type SearchFilter = {
	[key in Filter]: {
		name: string;
		logo: JSX.Element;
		contentType: Content;
	}
};