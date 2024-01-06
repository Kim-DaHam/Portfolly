import { HTMLAttributes, useEffect, useState } from "react";

import SearchBar from "../../../molecules/searchBar/SearchBar";

import { searchFilter, searchFilterList } from "./SearchModal.constants";
import { ModalLayout, ModalBox, FilterGroup, ContentBox, OptionButton, SearchSection, ContentSection } from "./SearchModal.styled";
import { Filter } from "./SearchModal.type";
import { renderContent } from "./SearchModal.utils";

import useStopScrollY from "@/hooks/useStopScrollY";
import { eventStopPropagation } from "@/utils/event";


function SearchModal({...attributes}: HTMLAttributes<HTMLDivElement>) {
	const [filter, setFilter] = useState<Filter>('Trending');
	const [isTextEntered, setIsTextEntered] = useState<boolean>(false);

	const changeFilter = (filter: Filter)=>{
		setFilter(filter);
	}

	useStopScrollY();

	useEffect(()=>{
		isTextEntered ? setFilter('Search') : setFilter('Trending')
	}, [isTextEntered])

	return(
		<ModalLayout {...attributes}>
			<ModalBox onClick={eventStopPropagation}>
				<SearchSection>
					<SearchBar isClicked={true} onInputChange={setIsTextEntered}/>
				</SearchSection>

				<ContentSection>
					{ !isTextEntered &&
						<FilterGroup>
							{searchFilterList.map((filter)=>{
								return (
									<OptionButton color='White' size='Large' onClick={()=>changeFilter(filter)}>
										{searchFilter[filter].icon}
										{searchFilter[filter].name}
									</OptionButton>
								)
							})}
						</FilterGroup>
					}

					<ContentBox>
						{renderContent(searchFilter[filter].contentType)}
					</ContentBox>
				</ContentSection>
			</ModalBox>
		</ModalLayout>
	)
}

export default SearchModal;