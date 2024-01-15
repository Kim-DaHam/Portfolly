import { FaSortDown as DownIcon, FaSortUp as UpIcon } from "react-icons/fa6";

import { selectorList } from "./Selector.constants";
import * as S from "./Selector.styled";

import useSelector from "@/hooks/useSelector";
import { Text } from "@/styles/Text.styled";
import { Section } from "@/types/portfolio";

export type TSelector = 'Section' | 'Android/iOS' | 'Web' | 'Illustration' | 'Photo' | 'Video' | 'RequestType' | 'RequestState' | 'SearchFilter' | 'MessageState';

type Props = {
	type: TSelector | Section;
	placeholder: string;
}

export default function Selector({type, placeholder}: Props) {
	const { isSelectorOpen, selectedValue, handleSelector, handleSelectedValue } = useSelector(placeholder);

	return(
		<S.Wrapper>
			<S.SelectorBox onClick={handleSelector}>
				<Text size='Medium'>{selectedValue}</Text>
				{isSelectorOpen ? <UpIcon /> : <DownIcon />}
			</S.SelectorBox>

			{ isSelectorOpen &&
				<>
				<S.DropDown>
					{ selectorList[type].map((selector)=>{
						return <S.DropDownItem onClick={handleSelectedValue}>{selector}</S.DropDownItem>
					})}
				</S.DropDown>

				<S.SelectorOutside onClick={handleSelector}/>
				</>
			}
		</S.Wrapper>
	)
}