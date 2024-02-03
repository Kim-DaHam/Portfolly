import { categories, commissionStates, messageStates, searchFilters, sections } from "@/assets/data/fields";
import { CommissionStatus, MessageStatus, SearchFilter, Section } from '@/types';

type SelectorList = {
	section: Section[];
	category: {
		[key in Section] : string[];
	};
	commissionType: Array<Section | '전체 상품'>;
	commissionStatus: Array<CommissionStatus | '전체 상태'>;
	searchFilter: SearchFilter[];
	messageStatus: Array<MessageStatus | '전체'>;
};

export const selectorList: SelectorList = {
	section: [...sections],
	category: {...categories},
	commissionType: ['전체 상품', ...sections],
	commissionStatus: ['전체 상태', ...commissionStates],
	searchFilter: [...searchFilters],
	messageStatus: ['전체', ...messageStates],
};