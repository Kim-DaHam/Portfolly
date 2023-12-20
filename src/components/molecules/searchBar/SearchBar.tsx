import { Dispatch, HTMLAttributes, SetStateAction } from "react";

import { SearchBarLayout, SearchInputArea, SearchLogo } from "./SearchBar.styled";

import useSearch from "@/hooks/useSearch";

type Props = HTMLAttributes<HTMLDivElement> & {
	isClicked: boolean;
	onInputChange?: Dispatch<SetStateAction<boolean>>;
};

function SearchBar({ isClicked, onInputChange, ...attributes }: Props){
	const { searchKeyword } = useSearch({onInputChange});

	return(
		<SearchBarLayout {...attributes}>
			<SearchLogo/>
			{ isClicked ?
				<SearchInputArea onChange={searchKeyword}/>
				:
				<div>Search on type...</div>
			}
		</SearchBarLayout>
	)
}

export default SearchBar;