export type IComponentFactory = {
	[key: string]: JSX.Element;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;