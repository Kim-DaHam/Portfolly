import { HTMLAttributes, useEffect, useState } from "react";

import * as S from "./SearchModal.styled";

import { Modal, SearchBar } from "@/components/molecules";
import { searchFilter, searchFilterList, renderContent } from "@/components/organisms/modal/search-modal";
import useStopScrollY from "@/hooks/useStopScrollY";

export type Filter = 'Trending' | 'AppCategory' | 'UserTags' | 'Search';
export type Content = 'Trending' | 'List' | 'Search';

export default function SearchModal({...props}: HTMLAttributes<HTMLDivElement>) {
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
		<Modal $type='search' {...props}>
			<S.Content>
				<S.SearchSection>
					<SearchBar isClicked={true} onInputChange={setIsTextEntered}/>
				</S.SearchSection>

				<S.ContentSection>
					{ !isTextEntered &&
						<S.FilterGroup>
							{searchFilterList.map((filter)=>{
								return (
									<S.Option color='white' size='large' shape='square' onClick={()=>changeFilter(filter)}>
										{searchFilter[filter].icon}
										{searchFilter[filter].name}
									</S.Option>
								)
							})}
						</S.FilterGroup>
					}

					<S.ContentBox>
						{renderContent(searchFilter[filter].contentType)}
					</S.ContentBox>
				</S.ContentSection>
			</S.Content>
		</Modal>
	)
}