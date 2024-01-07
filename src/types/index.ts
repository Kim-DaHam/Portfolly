import { Section } from "./portfolio";

export type IComponentFactory = {
	[key: string]: JSX.Element;
}

export type ISectionFactory = {
	[key: string]: Section;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;