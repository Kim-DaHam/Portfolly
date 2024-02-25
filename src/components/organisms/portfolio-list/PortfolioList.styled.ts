import styled, { css } from "styled-components";

import theme from "@/styles/theme";

import type { Section } from "@/types";

const getGridBoxMediaQuery = (section: Section) => {
	if(section === 'Android/iOS') {
		return css`
			@media ${theme.mainPageSize.app1st} {
				grid-template-columns: repeat(6, 1fr);
			}
			@media ${theme.mainPageSize.app2nd} {
				grid-template-columns: repeat(5, 1fr);
			}
			@media ${theme.mainPageSize.app3rd} {
				grid-template-columns: repeat(4, 1fr);
			}
			@media ${theme.mainPageSize.app4th} {
				grid-template-columns: repeat(3, 1fr);
			}
			@media ${theme.mainPageSize.app6th} {
				grid-template-columns: repeat(2, 1fr);
			}
			@media ${theme.mainPageSize.app7th} {
				grid-template-columns: repeat(1, 1fr);
			}
		`;
	}

	return css`
		@media ${theme.mainPageSize.web1st} {
			grid-template-columns: repeat(4, 1fr);
		}
		@media ${theme.mainPageSize.web2nd} {
			grid-template-columns: repeat(3, 1fr);
		}
		@media ${theme.mainPageSize.web4th} {
			grid-template-columns: repeat(2, 1fr);
		}
		@media ${theme.mainPageSize.web5th} {
			grid-template-columns: repeat(1, 1fr);
		}
	`;
};

export const Wrapper = styled.div`
`;

export const GridBox = styled.div<{$section: Section}>`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: ${props =>
		props.$section === 'Android/iOS' ?
			'repeat(7, 1fr)'
		:
			'repeat(5, 1fr)'
	};
	justify-content: space-between;
	gap: 1.7rem;

	${props => getGridBoxMediaQuery(props.$section)}
`;

export const Notification = styled.div`
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;

	padding-top: 5rem;
`;

export const ObserveDiv = styled.div`
	width: 100%;
	height: 1px;
	margin-top: 9rem;
`;