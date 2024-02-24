import styled, { css } from "styled-components";

import type { TSearchItem } from "@/components/organisms/search-item-list/SearchItemList";

export const Wrapper = styled.div<{$type: TSearchItem}>`
	width: 100%;
	height: 3rem;

	cursor: pointer;

	${props => props.$type === 'keyword' &&
		css`
			height: 3.5rem;
			display: flex;
			align-items: center;
			gap: 0.75rem;

			padding: 0.5rem;
			border-radius: 1rem;
		`
	}

	${props => (props.$type === 'category' || props.$type === 'tag') &&
		css`
			display: flex;
			justify-content: space-between;
			align-items: center;

			padding: 0.5rem 0.75rem;
			border-radius: 0.75rem;;
		`
	}

	&:hover {
		background-color: #f5f5f5;
	}

	& img {
		border-radius: 0.75rem;
	}
`;

export const TextBox = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.1rem;
`;

export const IconBox = styled.div`
	width: 2.5rem;
	height: 2.5rem;

	display: flex;
	justify-content: center;
	align-items: center;

	border: 1px solid #f5f5f5;
	border-radius: 0.75rem;
`;