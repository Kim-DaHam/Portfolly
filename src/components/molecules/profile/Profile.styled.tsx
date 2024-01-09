import { styled } from "styled-components";

import { Profile } from "./Profile";

import { profileSize } from "@/styles/token";

export const ProfileLayout = styled.div<{$type: Profile}>`
	width: 100%;
	height: ${(props)=>profileSize[props.$type]};

	display: flex;
	gap: 0.5rem;
	flex-grow: 1;
	flex-shrink: 1;

	overflow: hidden;

	background-color: yellow;
`;

export const SpanBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	flex-shrink: 1;

	overflow: hidden;

	& span {
		overflow: hidden;

		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;