import { HTMLAttributes, forwardRef, useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FiChevronDown as ArrowIcon } from "react-icons/fi";

import useSelector from "@/hooks/component/useSelector";
import { SetState } from "@/types";
import { Section } from "@/types/portfolio";

import { selectorList } from "./Selector.constants";
import * as S from "./Selector.styled";

import { Text } from "@/components";

export type TSelector = 'section' | 'category' | 'commissionType' | 'commissionStatus' | 'searchFilter' | 'messageStatus';

type Props = HTMLAttributes<HTMLDivElement> & {
	type: TSelector;
	section?: Section;
	placeholder: string;
	setValue?: UseFormSetValue<any>;
	handleSelectorValue?: SetState<any>;
	size?: string;
};

function Selector({type, placeholder, section='Android/iOS', setValue, handleSelectorValue, size='100%' }: Props) {
	const isManagedByUseFormRegister = setValue;
	const isManagedByUseState = handleSelectorValue;

	const { isSelectorOpen, selectedValue, handleSelector, handleSelectedValue } = useSelector(placeholder);

	useEffect(() => {
		if(isManagedByUseFormRegister) {
			setValue(type, selectedValue, { shouldDirty: true });
		}
		if(isManagedByUseState) {
			handleSelectorValue(selectedValue);
		}
	}, [selectedValue])

	return(
		<S.Wrapper $size={size}>
			<S.SelectorBox onClick={handleSelector} $isSelectorOpen={isSelectorOpen}>
				<Text size='bodyMedium'>{selectedValue}</Text>
				<ArrowIcon />
			</S.SelectorBox>

			{ isSelectorOpen &&
				<>
				<S.DropDown>
					{ type === 'category' ?
						selectorList[type][section].map((selector: string, index: number) => {
							return (
							<S.DropDownItem
								key={index}
								onClick={handleSelectedValue}
							>
								{selector}
							</S.DropDownItem>
							);
						})
					:
						selectorList[type].map((selector: string, index: number) => {
							return (
								<S.DropDownItem
									key={index}
									onClick={handleSelectedValue}
								>
									{selector}
								</S.DropDownItem>
							);
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