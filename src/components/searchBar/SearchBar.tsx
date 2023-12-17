import { Dispatch, HTMLAttributes, SetStateAction } from "react";

import { SearchBarContainer, SearchInputArea, SearchLogo } from "./SearchBar.styled";

import useSearch from "@/hooks/useSearch";

type Props = HTMLAttributes<HTMLDivElement> & {
	isClicked: boolean;
	onInputChange?: Dispatch<SetStateAction<boolean>>;
};

function SearchBar({ isClicked, onInputChange, ...attributes }: Props){
	const { searchKeyword } = useSearch({onInputChange});

	return(
		<SearchBarContainer {...attributes}>
			<SearchLogo/>
			{ isClicked ?
				<SearchInputArea onChange={searchKeyword}/>
				:
				<div>Search on type...</div>
			}
		</SearchBarContainer>
	)
}

export default SearchBar;