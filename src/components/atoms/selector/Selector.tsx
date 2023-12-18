import { useState } from "react";
import { FaSortDown as DownIcon, FaSortUp as UpIcon } from "react-icons/fa6";

import { DropDownBox, DropDownItem, SelectorBox, SelectorLayout, Span } from "./Selector.styled";

type Selector = 'Category';

type Props = {
	type: Selector;
}

function Selector({type}: Props) {
	const [isSelectorOpen, setIsSelectorOpen] = useState(false);
	const [select, setSelect] = useState('Select');

	const openSelector = ()=> {
		setIsSelectorOpen(prev=>!prev);
	}

	const changeSelect = (event: React.MouseEvent)=>{
		const target = event.target as HTMLDivElement;

		setSelect(target.innerText);
		setIsSelectorOpen(prev=>!prev);
	}

	return(
		<SelectorLayout>
			<SelectorBox onClick={openSelector}>
				<Span>{select}</Span>
				{isSelectorOpen ? <UpIcon /> : <DownIcon />}
			</SelectorBox>

			{ isSelectorOpen &&
				<DropDownBox>
					<DropDownItem onClick={changeSelect}>1</DropDownItem>
					<DropDownItem>2</DropDownItem>
					<DropDownItem>3</DropDownItem>
					<DropDownItem>4</DropDownItem>
					<DropDownItem>5</DropDownItem>
					<DropDownItem>6</DropDownItem>
					<DropDownItem>7</DropDownItem>
					<DropDownItem>8</DropDownItem>
					<DropDownItem>9</DropDownItem>
				</DropDownBox>
			}
		</SelectorLayout>
	)
}

export default Selector;