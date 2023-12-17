import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from "react";

import { SearchBarContainer, SearchInputArea, SearchLogo } from "./SearchBar.styled";

type Props = HTMLAttributes<HTMLDivElement> & {
	isClicked: boolean;
	onInputChange?: Dispatch<SetStateAction<boolean>>;
}

function SearchBar({ isClicked, onInputChange, ...attributes }: Props){
	const [searchWord, setSearchWord] = useState<string>('');

	const searchKeyword = (keyword:string) => {
		setSearchWord(keyword);

		if(searchWord.length > 0){
			onInputChange?.(true);
		}
	}

	useEffect(()=>{
		if(searchWord === ''){
			onInputChange?.(false);
		}
	}, [searchWord])

	return(
		<SearchBarContainer {...attributes}>
			<SearchLogo/>
			{ isClicked ?
				<SearchInputArea onChange={(event)=>searchKeyword(event.target.value)}/>
				:
				<div>Search on type...</div>
			}
		</SearchBarContainer>
	)
}

export default SearchBar;