import { styled } from 'styled-components';

import { FlexColumnBox } from '@/styles/Container.styled';

export const RequestModalLayout = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;

	background-color: #0000007e;
`;

export const ModalBox = styled.div`
	width: 50%;
	height: 90%;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	padding: 1.7rem 2rem 3rem 2rem;

	border-radius: 16px;
	background-color: white;
`;

export const CloseButton = styled.div`
	width: 100%;

	display: flex;
	justify-content: right;

	cursor: pointer;
`

export const ContentSection = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	overflow-y: auto;

	background-color: beige;
`

export const TitleBox = styled(FlexColumnBox)`
	gap: 0.5rem;
`;

export const RequestForm = styled.form`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	border: 1px solid black;
`;

export const ButtonGroup = styled.div`
	width: 100%;
	height: 5rem;

	display: flex;
	justify-content: center;
	gap: 1rem;
`