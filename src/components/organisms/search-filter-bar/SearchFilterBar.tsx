import { useForm } from "react-hook-form";
import { FiX as DeleteIcon, FiSearch as SearchIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as S from '@/components/organisms/search-filter-bar/SearchFilterBar.styled';

import { section } from "@/redux";
import { toUrlParameter } from "@/utils";

import { Button, Selector } from '@/components';

type Props = {
	filterList: {[key in string]: string};
};

export type FormValues = {
	category: string,
	searchKeyword: string
};

const defaultValues: FormValues = {
	category: '전체',
	searchKeyword: '',
};

export default function SearchFilterBar({ filterList }: Props) {
	const navigate = useNavigate();
	const currentSection = useSelector(section);

	const sectionParameter = toUrlParameter(currentSection);
	const mainFilterType = Object.keys(filterList)[0];

	const { register, handleSubmit, setValue } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const handleFilter = (removeFilterType?: string) => {
		let url = `/search/${sectionParameter}?filter=`;

		Object.keys(filterList).forEach((filterType: string) => {
			if(filterType === removeFilterType) return;
			url += `${filterType}.${filterList[filterType]}_`;
		});

		url = url.slice(0, -1);
		navigate(url);
	};

	const onSubmit = (data: FormValues) => {
		if(data.category !== '카테고리') {
			filterList['appCategory'] = data.category;
		}
		if(data.searchKeyword.length > 0) {
			filterList['keyword'] = data.searchKeyword;
		}
		setValue('searchKeyword', '');
		handleFilter();
	};

	return (
		<S.Wrapper>
			{ !filterList['appCategory'] ?
				<Selector
					size='10rem'
					type='category'
					placeholder='카테고리'
					setValue={setValue}
				/>
				:
				<S.FilterItem color='black'>
					{filterList['appCategory']}
					<S.Icon>
						<DeleteIcon onClick={() => handleFilter('appCategory')} />
					</S.Icon>
				</S.FilterItem>
			}

			{ mainFilterType !== 'keyword' && !filterList['keyword'] &&
				<S.Input
					placeholder='제목을 검색하세요'
					{...register('searchKeyword')}
				/>
			}
			{ mainFilterType !== 'keyword' && filterList['keyword'] &&
				<S.FilterItem color='black'>
					{filterList['keyword']}
					<S.Icon>
						<DeleteIcon onClick={() => handleFilter('keyword')} />
					</S.Icon>
				</S.FilterItem>
			}

			<Button color='black' onClick={handleSubmit(onSubmit)}>
				<SearchIcon size={18} />
			</Button>
		</S.Wrapper>
	);
}