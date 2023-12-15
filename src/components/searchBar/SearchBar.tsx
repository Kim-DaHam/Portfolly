import { Dispatch, HTMLAttributes, useEffect, useState } from "react";

import { SearchBarContainer, SearchInputArea, SearchLogo } from "./SearchBar.styled";

interface SearchBarProps extends HTMLAttributes<HTMLDivElement> {
	isClicked: boolean;
	onInputChange?: Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({ isClicked, onInputChange, ...attributes }: SearchBarProps){
	const [searchWord, setSearchWord] = useState<string>('');

	const searchKeyword = (keyword:string) => {
		console.log(keyword);
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