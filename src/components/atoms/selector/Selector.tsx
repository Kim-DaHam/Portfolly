import { HTMLAttributes, forwardRef, useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FaSortDown as DownIcon, FaSortUp as UpIcon } from "react-icons/fa6";

import { selectorList } from "./Selector.constants";
import * as S from "./Selector.styled";

import { Text } from "@/components";
import useSelector from "@/hooks/component/useSelector";
import { SetState } from "@/types";
import { Section } from "@/types/portfolio";

export type TSelector = 'section' | 'category' | 'commissionType' | 'commissionState' | 'searchFilter' | 'messageState';

type Props = HTMLAttributes<HTMLDivElement> & {
	type: TSelector;
	section?: Section;
	placeholder: string;
	setValue?: UseFormSetValue<any>;
	setSelectorValue?: SetState<any>;
	size?: string;
};

function Selector({type, placeholder, section='Android/iOS', setValue, setSelectorValue, size='100%' }: Props) {
	const { isSelectorOpen, selectedValue, handleSelector, handleSelectedValue } = useSelector(placeholder);

	useEffect(() => {
		if(setValue) {
			setValue(type, selectedValue, { shouldDirty: true });
		}
		if(setSelectorValue) {
			setSelectorValue(selectedValue);
		}
	}, [selectedValue])

	return(
		<S.Wrapper $size={size}>
			<S.SelectorBox onClick={handleSelector}>
				<Text type='common'>{selectedValue}</Text>
				{isSelectorOpen ? <UpIcon /> : <DownIcon />}
			</S.SelectorBox>

			{ isSelectorOpen &&
				<>
				<S.DropDown>
					{ type === 'category' ?
						selectorList[type][section].map((selector: string, index: number) => {
							return <S.DropDownItem onClick={handleSelectedValue} key={index}>{selector}</S.DropDownItem>;
						})
					:
						selectorList[type].map((selector: string, index: number) => {
							return <S.DropDownItem onClick={handleSelectedValue} key={index}>{selector}</S.DropDownItem>;
						})
					}
				</S.DropDown>

				<S.SelectorOutside onClick={handleSelector}/>
				</>
			}
		</S.Wrapper>
	)
}

export default forwardRef(Selector);