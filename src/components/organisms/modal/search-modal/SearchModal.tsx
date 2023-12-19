import { HTMLAttributes, useEffect, useState } from "react";

import SearchBar from "../../../molecules/searchBar/SearchBar";

import { searchFilter, searchFilterList } from "./SearchModal.constants";
import { ModalLayout, ModalBox, SearchContainer, ContentContainer, FilterGroup, ContentBox, OptionButton } from "./SearchModal.styled";
import { Filter } from "./SearchModal.type";
import { renderContent } from "./SearchModal.utils";

import { eventStopPropagation } from "@/utils/event";
import { moveScrollY, stopScrollY } from "@/utils/style";


function SearchModal({...attributes}: HTMLAttributes<HTMLDivElement>) {
	const [filter, setFilter] = useState<Filter>('Trending');
	const [isTextEntered, setIsTextEntered] = useState<boolean>(false);

	const changeFilter = (filter: Filter)=>{
		setFilter(filter);
	}

	useEffect(()=>{
		stopScrollY();
		return () => {
			moveScrollY();
		}
	},[]);

	useEffect(()=>{
		isTextEntered ? setFilter('Search') : setFilter('Trending')
	}, [isTextEntered])

	return(
		<ModalLayout {...attributes}>
			<ModalBox onClick={eventStopPropagation}>
				<SearchContainer>
					<SearchBar isClicked={true} onInputChange={setIsTextEntered}/>
				</SearchContainer>

				<ContentContainer>
					<FilterGroup>
						{searchFilterList.map((filter)=>{
							return (
								<OptionButton onClick={()=>changeFilter(filter)}>
									{searchFilter[filter].logo}
									{searchFilter[filter].name}
								</OptionButton>
							)
						})}
					</FilterGroup>

					<ContentBox>
						{renderContent(searchFilter[filter].contentType)}
					</ContentBox>
				</ContentContainer>
			</ModalBox>
		</ModalLayout>
	)
}

export default SearchModal;