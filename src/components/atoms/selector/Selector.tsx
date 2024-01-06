import { FaSortDown as DownIcon, FaSortUp as UpIcon } from "react-icons/fa6";

import { selectorList } from "./Selector.constants";
import { DropDown, DropDownItem, SelectorHead, SelectorLayout, SelectorOutside } from "./Selector.styled";

import { Selector as TSelector } from '@/components/atoms/selector/Selector.types'
import useSelector from "@/hooks/useSelector";
import { Text } from "@/styles/Text.styled";
import { Section } from "@/types/portfolio";

type Props = {
	type: TSelector | Section;
	placeholder: string;
}

export default function Selector({type, placeholder}: Props) {
	const { isSelectorOpen, selectedValue, handleSelector, handleSelectedValue } = useSelector(placeholder);

	return(
		<SelectorLayout>
			<SelectorHead onClick={handleSelector}>
				<Text size='Medium'>{selectedValue}</Text>
				{isSelectorOpen ? <UpIcon /> : <DownIcon />}
			</SelectorHead>

			{ isSelectorOpen &&
				<>
				<DropDown>
					{ selectorList[type].map((selector)=>{
						return <DropDownItem onClick={handleSelectedValue}>{selector}</DropDownItem>
					})}
				</DropDown>

				<SelectorOutside onClick={handleSelector}/>
				</>
			}
		</SelectorLayout>
	)
}