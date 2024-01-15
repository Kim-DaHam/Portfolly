import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}

	padding: 1rem 2rem 1rem 2rem;

	background-color: gray;
`;

export const Content = styled.div`
	width: 100%;
	height: 8rem;

	${mixins.flexCenter}
	gap: 1.5rem;
`;

export const Box = styled.div`
	${mixins.fullWidthHeight}

	${mixins.flexColumn}
	justify-content: center;
	align-items: end;
	gap: 1rem;

	padding: 1rem;

	background-color: white;
`;

export const Group = styled.div`
	${mixins.fullWidthHeight}

	display: flex;
	justify-content: space-between;

	background-color: salmon;
`;

export const LabelGroup = styled(Group)`
	height: fit-content;
`;

export const Count = styled.span`
	font-size: 2rem;
	font-weight: 600;
`;