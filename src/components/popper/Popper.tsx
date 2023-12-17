import { Dispatch, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";

import { Group, Item, PopperContainer, PopperLayout, SectionGroup, Separator } from "./Popper.styled";

import { IComponentFactory } from "@/types";
import { moveScrollY, stopScrollY } from "@/utils/style";

export type Popper = 'header' | 'portfolioItem' | 'section';

type Props = {
	type: Popper;
	right: number;
	bottom: number;
	popOut: Dispatch<SetStateAction<boolean>>;
};

const renderPopper = (type: Popper) => {
	const ComponentFactory: IComponentFactory = {
		header: (
			<>
				<Group>
					<Item>MenuItem1</Item>
					<Item>MenuItem2</Item>
				</Group>
				<Separator/>
				<Group>
					<Item>MenuItem3</Item>
					<Item>MenuItem4</Item>
				</Group>
			</>
		),
		portfolioItem: (
			<Group>
				<Item>MenuItem1</Item>
				<Item>MenuItem2</Item>
			</Group>
		),
		section: (
			<SectionGroup>
				<Item>Android/iOS</Item>
				<Item>Web</Item>
				<Item>Illustration</Item>
				<Item>Graphics</Item>
				<Item>Video</Item>
			</SectionGroup>
		),
	}

	return ComponentFactory[type];
}

function Popper({ type, right, bottom, popOut}: Props) {

	useEffect(()=>{
		stopScrollY();
		return () => {
			moveScrollY();
		}
	},[]);

	return createPortal(
		<PopperLayout onClick={()=>popOut(prev=>!prev)}>
			<PopperContainer top={bottom} right={right} onClick={(event)=> event.stopPropagation()}>
				{renderPopper(type)}
			</PopperContainer>,
		</PopperLayout>,
		document.getElementById('modal')!
	)
}

export default Popper;