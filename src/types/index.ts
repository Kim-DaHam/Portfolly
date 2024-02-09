import { Section } from "./portfolio";

export type IComponentFactory = {
	[key: string]: JSX.Element;
}

export type ISectionFactory = {
	[key: string]: Section;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

// export * from '@/types/portfolio';
// export * from '@/types/user';
export * from '@/types/slider';
export * from '@/types/global-component';
// export * from '@/types/commission';
export * from '@/types/style';

export type * from '@/types/api-data/message';
export type * from '@/types/api-data/portfolio';
export type * from '@/types/api-data/user';
export type * from '@/types/api-data/commission';