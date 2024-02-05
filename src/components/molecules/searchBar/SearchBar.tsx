import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { useSelector } from "react-redux";

import * as S from "@/components/molecules/searchBar/SearchBar.styled";
import { section } from "@/redux/sectionSlice";

import { useSearch } from "@/hooks";

import { Text } from "@/components";

type Props = HTMLAttributes<HTMLDivElement> & {
	isClicked: boolean;
	onInputChange?: Dispatch<SetStateAction<boolean>>;
};

export default function SearchBar({ isClicked, onInputChange, ...attributes }: Props){
	const { searchKeyword } = useSearch({onInputChange});

	const currentSection = useSelector(section);

	return(
		<S.Wrapper {...attributes}>
			<SearchIcon size={20} />
			{ isClicked ?
				<S.Input
					onChange={searchKeyword}
					placeholder={`Search on ${currentSection}...`}
				/>
				:
				<Text size='bodyMedium' color='gray'>
					{`Search on ${currentSection}...`}
				</Text>
			}
		</S.Wrapper>
	)
}