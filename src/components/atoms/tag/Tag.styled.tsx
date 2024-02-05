import styled from 'styled-components';

export const Wrapper = styled.div<{readOnly: boolean}>`
	width: fit-content;
	height: 2.2rem;

	position: relative;
	display: flex;
	align-items: center;
	flex: none;

	padding: 1rem;
	border-radius: 4rem;
  background-color: #f3f3f3;
	transition: all 0.2s;
	cursor: ${(props)=>props.readOnly ? 'pointer' : ''};

	&:hover{
		background-color: #d7d7d7;
		& div{
			visibility: visible;
		}
		& div svg{
			visibility: visible;
		}
	}
`;

export const Icon = styled.div`
	position: absolute;
	z-index: 200;
	right: 0.5rem;
	visibility: hidden;
	& svg {
		visibility: hidden;
	}
`;