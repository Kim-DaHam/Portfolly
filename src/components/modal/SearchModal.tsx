import { HTMLAttributes, useEffect, useState } from "react";

import SearchBar from "../searchBar/SearchBar";

import { ModalLayout, ModalBox, SearchContainer, ContentContainer, FilterGroup, ItemList, ContentBox, OptionButton, Item, FlexBox } from "./SearchModal.styled";

import { IComponentFactory } from "@/types";

type Filter = 'Trending' | 'Categories' | 'Tags' | 'Search';

const renderContent = (filter: Filter) => {
	const ComponentFactory: IComponentFactory = {
		Trending: (
			<>
				<div>요즘 핫한 파트너</div>
				<FlexBox>
					<div>1</div>
					<div>2</div>
				</FlexBox>
				<div>이번주 인기 포트폴리오</div>
				<FlexBox>
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</FlexBox>
				<div>인기 태그</div>
				<FlexBox>
					인기 태그 5~개
				</FlexBox>
			</>
		),
		Categories: (
			<>
				<div>{filter}</div>
				<ItemList>
					<Item>
						<span>Item 1</span>
						<span>count</span>
					</Item>
					<Item>
						<span>Item 2</span>
						<span>count</span>
					</Item>
					<Item>
						<span>Item 3</span>
						<span>count</span>
					</Item>
				</ItemList>
			</>
		),
		Tags: (
			<>
				<div>{filter}</div>
				<ItemList>
					반복문으로 Item 출력
				</ItemList>
			</>
		),
		Search: (
			<>
				<ItemList>
					검색 결과
				</ItemList>
			</>
		)
	}

	return ComponentFactory[filter];
}

function SearchModal({...attributes}: HTMLAttributes<HTMLDivElement>) {
	const [filter, setFilter] = useState<Filter>('Trending');
	const [isTextEntered, setIsTextEntered] = useState<boolean>(false);

	useEffect(()=>{
		document.body.style.cssText = `
				position: fixed;
				top: -${window.scrollY}px;
				overflow-y: scroll;
				width: 100%;
				overflow: hidden;
		`

		return () => {
				const scrollY = document.body.style.top;
				document.body.style.cssText = '';
				window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		}
	},[]);

	useEffect(()=>{
		isTextEntered ? setFilter('Search') : setFilter('Trending')
	}, [isTextEntered])

	return(
		<ModalLayout {...attributes}>
			<ModalBox onClick={(event)=> event.stopPropagation()}>
				<SearchContainer>
					<SearchBar isClicked={true} onInputChange={setIsTextEntered}/>
				</SearchContainer>

				<ContentContainer>
					<FilterGroup>
						<OptionButton onClick={()=>setFilter('Trending')}>
							{/* 로고 */}
							Trending
						</OptionButton>
						<OptionButton onClick={()=>setFilter('Categories')}>
							{/* 로고 */}
							App Categories
						</OptionButton>
						<OptionButton onClick={()=>setFilter('Tags')}>
							{/* 로고 */}
							User Tags
						</OptionButton>
					</FilterGroup>

					<ContentBox>
						{renderContent(filter)}
					</ContentBox>
				</ContentContainer>
			</ModalBox>
		</ModalLayout>
	)
}

export default SearchModal;