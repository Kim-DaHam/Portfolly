export type IComponentFactory = {
	[key: string]: JSX.Element;
}

export type SetState = React.Dispatch<React.SetStateAction<string>>;