export type Selector = 'Section' | 'Android/iOS' | 'Web' | 'Illustration' | 'Photo' | 'Video' | 'RequestType' | 'RequestState' | 'SearchFilter' | 'MessageState';

export type SelectorList = {
	[key in Selector] : Array<string>;
}