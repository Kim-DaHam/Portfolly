import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	height: fit-content;

	padding: 1rem 2rem 1rem 2rem;

	border-radius: 0.75rem;
	background-color: #fafafc;
`;

export const Content = styled.div`
	width: 100%;
	height: 8rem;

	${mixins.flexCenter}
	gap: 2rem;
`;

export const Box = styled.div`
	${mixins.fullWidthHeight}

	${mixins.flexColumn}
	justify-content: center;
	align-items: end;
	gap: 1rem;

	padding: 1rem 1.5rem;

	border-radius: 0.5rem;
	box-shadow: 0 4px 14px rgba(48,52,65,0.08);
	background-color: white;
`;

export const Group = styled.div`
	${mixins.fullWidthHeight}

	display: flex;
	justify-content: space-between;
`;

export const LabelGroup = styled(Group)`
	height: fit-content;
`;

export const Count = styled.span`
	font-size: 2rem;
	font-weight: 600;
`;