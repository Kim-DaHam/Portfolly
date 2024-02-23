import styled, { css } from "styled-components";

import type { TSearchItem } from "@/components/organisms/search-item-list/SearchItemList";

export const Wrapper = styled.div<{type: TSearchItem}>`
	width: 100%;
	height: 3rem;

	cursor: pointer;
	padding: 0 0.5rem;

	${props => props.type === 'keyword' &&
		css`
			height: 3.499rem;
			display: flex;
			align-items: center;
			gap: 0.75rem;

			border-radius: 1rem;
		`
	}

	${props => (props.type === 'category' || props.type === 'tag') &&
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
`;

export const FlexBox = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.1rem;
`;