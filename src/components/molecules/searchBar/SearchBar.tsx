import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { FiSearch as SearchIcon } from "react-icons/fi";

import * as S from "@/components/molecules/searchBar/SearchBar.styled";

import { useSearch } from "@/hooks";

import { Text } from "@/components";

type Props = HTMLAttributes<HTMLDivElement> & {
	isClicked: boolean;
	onInputChange?: Dispatch<SetStateAction<boolean>>;
};

export default function SearchBar({ isClicked, onInputChange, ...attributes }: Props){
	const { searchKeyword } = useSearch({onInputChange});

	return(
		<S.Wrapper {...attributes}>
			<SearchIcon size={20} />
			{ isClicked ?
				<S.Input onChange={searchKeyword}/>
				:
				<Text size='bodyMedium' color='gray'>Search on type...</Text>
			}
		</S.Wrapper>
	)
}