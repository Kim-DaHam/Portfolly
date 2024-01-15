import { Dispatch, HTMLAttributes, SetStateAction } from "react";

import * as S from "@/components/molecules/searchBar/SearchBar.styled";
import useSearch from "@/hooks/useSearch";

type Props = HTMLAttributes<HTMLDivElement> & {
	isClicked: boolean;
	onInputChange?: Dispatch<SetStateAction<boolean>>;
};

export default function SearchBar({ isClicked, onInputChange, ...attributes }: Props){
	const { searchKeyword } = useSearch({onInputChange});

	return(
		<S.Wrapper {...attributes}>
			<S.SearchLogo/>
			{ isClicked ?
				<S.Input onChange={searchKeyword}/>
				:
				<div>Search on type...</div>
			}
		</S.Wrapper>
	)
}