import { css } from 'styled-components';

import { HEADER_HEIGHT } from '@/components/organisms/header/Header.styled';

/** Layouts */
export const fullScreen = css`
	width: 100vw;
	min-height: 100vh;
	height: 100%;

	padding: 3rem 4rem 3rem 4rem;
	padding-top: ${HEADER_HEIGHT};
`;

export const fullWidthHeight = css`
	width: 100%;
	height: 100%;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexColumn = css`
	display: flex;
	flex-direction: column;
`;

export const alignCenter = css`
	display: flex;
	align-items: center;
`;