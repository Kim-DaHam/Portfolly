import { Dispatch, SetStateAction, useEffect, useState } from "react";

type InitialProps = {
	onInputChange: Dispatch<SetStateAction<boolean>> | undefined;
};

function useSearch({onInputChange}: InitialProps) {
	const [searchWord, setSearchWord] = useState<string>('');

	const searchKeyword = (event: React.ChangeEvent) => {
		const inputElement = event.target as HTMLInputElement;
		const keyword = inputElement.value;

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

	return {searchKeyword};
}

export default useSearch;