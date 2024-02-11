import { useEffect, useState } from "react";

import { Modal, SearchBar } from "@/components/molecules";
import { searchFilter, searchFilterList, renderContent } from "@/components/organisms/modal/search-modal";

import * as S from "./SearchModal.styled";

export type Filter = 'Trending' | 'AppCategory' | 'UserTags' | 'Search';
export type Content = 'Trending' | 'List' | 'Search';

type Props = {
	$modalState: boolean;
	onClose: React.MouseEventHandler<HTMLElement>;
}

export default function SearchModal({ $modalState, onClose }: Props) {
	const [currentFilter, setCurrentFilter] = useState<Filter>('Trending');
	const [isTextEntered, setIsTextEntered] = useState<boolean>(false);

	const changeFilter = (filter: Filter)=>{
		setCurrentFilter(filter);
	}

	useEffect(()=>{
		isTextEntered ? setCurrentFilter('Search') : setCurrentFilter('Trending')
	}, [isTextEntered])

	return(
		<Modal
			$type='search'
			$modalState={$modalState}
			onClose={onClose}
		>
			<S.Content>
				<S.SearchSection>
					<SearchBar isClicked onInputChange={setIsTextEntered} />
				</S.SearchSection>

				<S.ContentSection>
					{ !isTextEntered &&
						<S.FilterGroup>
							{searchFilterList.map((filter: Filter, index: number)=>{
								return (
									<S.Option
										key={index}
										color='white'
										size='large'
										onClick={()=>changeFilter(filter)}
										$isClicked={filter === currentFilter}
									>
										{searchFilter[filter].name}
									</S.Option>
								)
							})}
						</S.FilterGroup>
					}

					<S.ContentBox>
						{renderContent(searchFilter[currentFilter].contentType, '')}
					</S.ContentBox>
				</S.ContentSection>
			</S.Content>
		</Modal>
	)
}