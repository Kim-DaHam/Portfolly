import { useState } from "react";
import { FaSortDown as DownIcon, FaSortUp as UpIcon } from "react-icons/fa6";

import { selectorList , Selector as TSelector } from "./Selector.constants";
import { DropDownBox, DropDownItem, SelectorBox, SelectorLayout, Span } from "./Selector.styled";

import { Section } from "@/types/portfolio";

type Props = {
	type: TSelector | Section;
	placeholder: string;
}

function Selector({type, placeholder}: Props) {
	const [isSelectorOpen, setIsSelectorOpen] = useState(false);
	const [select, setSelect] = useState(placeholder);

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
					{ selectorList[type].map((selector)=>{
						return <DropDownItem onClick={changeSelect}>{selector}</DropDownItem>
					})}
				</DropDownBox>
			}
		</SelectorLayout>
	)
}

export default Selector;