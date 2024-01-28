import { categories, commissionStates, messageStates, searchFilters, sections } from "@/assets/data/fields";
import { CommissionState, MessageState, SearchFilter, Section } from '@/types';

type SelectorList = {
	section: Section[];
	category: {
		[key in Section] : string[];
	};
	commissionType: Array<Section | '전체 상품'>;
	commissionState: Array<CommissionState | '전체 상태'>;
	searchFilter: SearchFilter[];
	messageState: Array<MessageState | '전체'>;
};

export const selectorList: SelectorList = {
	section: [...sections],
	category: {...categories},
	commissionType: ['전체 상품', ...sections],
	commissionState: ['전체 상태', ...commissionStates],
	searchFilter: [...searchFilters],
	messageState: ['전체', ...messageStates],
};