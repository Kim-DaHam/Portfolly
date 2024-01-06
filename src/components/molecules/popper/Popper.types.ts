export type Props = {
	coordinate: {right: number, bottom: number};
	popOut: ()=>void;
	children: JSX.Element;
};