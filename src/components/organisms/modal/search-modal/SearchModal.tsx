import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { renderContent } from "@/components/organisms/modal/search-modal/SearchModal.helpers";
import * as S from "@/components/organisms/modal/search-modal/SearchModal.styled";

import { Modal, SearchBar } from "@/components";

export type Filter = 'App Category' | 'Tags' | 'Search';

export const searchFilters: Filter[] = ['App Category', 'Tags'];

type Props = {
	$modalState: boolean;
	onClose: React.MouseEventHandler<HTMLElement>;
}

export default function SearchModal({ $modalState, onClose }: Props) {
	const [currentFilter, setCurrentFilter] = useState<Filter>('App Category');
	const [isTextEntered, setIsTextEntered] = useState<boolean>(false);

	const { reset } = useQueryErrorResetBoundary();

	const changeFilter = (filter: Filter)=>{
		setCurrentFilter(filter);
	}

	useEffect(()=>{
		isTextEntered ? setCurrentFilter('Search') : setCurrentFilter('App Category')
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
							{searchFilters.map((filter: Filter, index: number)=>{
								return (
									<S.Option
										key={index}
										color='white'
										size='large'
										onClick={()=>changeFilter(filter)}
										$isClicked={filter === currentFilter}
									>
										{filter}
									</S.Option>
								)
							})}
						</S.FilterGroup>
					}

					<S.ContentBox>
						{renderContent(currentFilter, reset)}
					</S.ContentBox>
				</S.ContentSection>
			</S.Content>
		</Modal>
	)
}