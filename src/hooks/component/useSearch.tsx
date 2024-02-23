import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setKeyword } from "@/redux";

type InitialProps = {
	onInputChange: Dispatch<SetStateAction<boolean>> | undefined;
};

export default function useSearch({ onInputChange }: InitialProps) {
	const [searchWord, setSearchWord] = useState<string>('');

	const dispatch = useDispatch();

	const searchKeyword = (event: React.ChangeEvent) => {
		const inputElement = event.target as HTMLInputElement;
		const keyword = inputElement.value;

		setSearchWord(keyword);
		dispatch(setKeyword(keyword));

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