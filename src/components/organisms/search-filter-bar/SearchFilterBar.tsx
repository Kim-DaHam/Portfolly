import { useForm } from "react-hook-form";
import { FiX as DeleteIcon, FiSearch as SearchIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as S from '@/components/organisms/search-filter-bar/SearchFilterBar.styled';

import type { SetState } from "@/types";

import { section } from "@/redux";
import { toUrlParameter } from "@/utils";

import { Button, Selector } from '@/components';

type Props = {
	filter: {[key in string]: string},
	handleRendering: SetState<boolean>;
};

export type FormValues = {
	category: string,
	searchKeyword: string
};

const defaultValues: FormValues = {
	category: '전체',
	searchKeyword: '',
};

export default function SearchFilterBar({ filter, handleRendering }: Props) {
	const navigate = useNavigate();
	const currentSection = useSelector(section);

	const sectionParameter = toUrlParameter(currentSection);
	const mainFilterType = Object.keys(filter)[0];

	const { register, handleSubmit, setValue } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const handleFilter = (removeFilterType?: string) => {
		let url = `/search/${sectionParameter}?filter=`;

		Object.keys(filter).forEach((filterType: string) => {
			if(filterType === removeFilterType) return;
			url += `${filterType}.${toUrlParameter(filter[filterType])}_`;
		});

		url = url.slice(0, -1);
		navigate(url);
	};

	const onSubmit = (data: FormValues) => {
		if(data.category !== '카테고리') {
			filter['appCategory'] = data.category;
		}
		if(data.searchKeyword.length > 0) {
			filter['keyword'] = data.searchKeyword;
		}
		setValue('searchKeyword', '');
		handleFilter();
		handleRendering(prev => !prev);
	};

	return (
		<S.Wrapper>
			{ !filter['appCategory'] ?
				<Selector
					size='10rem'
					type='category'
					placeholder='카테고리'
					setValue={setValue}
				/>
				:
				<S.FilterItem color='black'>
					{filter['appCategory']}
					<S.Icon>
						<DeleteIcon onClick={() => handleFilter('appCategory')} />
					</S.Icon>
				</S.FilterItem>
			}

			{ mainFilterType !== 'keyword' && !filter['keyword'] &&
				<S.Input
					placeholder='제목을 검색하세요'
					{...register('searchKeyword')}
				/>
			}
			{ mainFilterType !== 'keyword' && filter['keyword'] &&
				<S.FilterItem color='black'>
					{filter['keyword']}
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