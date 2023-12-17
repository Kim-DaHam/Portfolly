import { Group, Item, Separator } from "./Popper.styled";
import { Popper } from "./Popper.type";

import { IComponentFactory } from "@/types";


export const renderPopper = (type: Popper) => {
	const ComponentFactory: IComponentFactory = {
		HeaderMenu: (
			<>
				<Group size='Default'>
					<Item>MenuItem1</Item>
					<Item>MenuItem2</Item>
				</Group>
				<Separator/>
				<Group size='Default'>
					<Item>MenuItem3</Item>
					<Item>MenuItem4</Item>
				</Group>
			</>
		),
		PortfolioMenu: (
			<Group size='Default'>
				<Item>MenuItem1</Item>
				<Item>MenuItem2</Item>
			</Group>
		),
		SectionMenu: (
			<Group size='Fit'>
				<Item>Android/iOS</Item>
				<Item>Web</Item>
				<Item>Illustration</Item>
				<Item>Graphics</Item>
				<Item>Video</Item>
			</Group>
		),
	}

	return ComponentFactory[type];
}