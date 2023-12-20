import { styled } from 'styled-components';

export const TagLayout = styled.div<{readOnly: boolean}>`
	width: fit-content;
	height: 2rem;

	position: relative;

	display: flex;
	align-items: center;

	padding: 0 1rem 0 1rem;
	border: 1px solid black;

	cursor: ${(props)=>props.readOnly ? '' : 'pointer'};

	border-radius: 1rem;

	&:hover{
		& div{
			visibility: visible;
		}
		& div svg{
			visibility: visible;
		}
	}
`;

export const IconBox = styled.div`
	visibility: hidden;

	& svg {
		visibility: hidden;
	}

	position: absolute;
	z-index: 200;
	right: 0.5rem;
`;