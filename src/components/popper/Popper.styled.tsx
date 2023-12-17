import { styled } from 'styled-components';

export const PopperLayout = styled.div`
	width: 100vw;
	height: 100%;
	background-color: transparent;
`;

export const PopperContainer = styled.div<{top: number, right: number}>`
    width: auto;
    background-color: lightgray;
    border-radius: 16px;

    position: fixed;
		z-index: 999;

    display: flex;
    flex-direction: column;

    top: ${(props) => props.top + 10}px;
    right: ${(props) => document.documentElement.clientWidth - props.right}px;
`;

export const Separator = styled.div`
    width: 100%;
    height: 0.1rem;
    background-color: black;
`;

export const Group = styled.div`
    width: 15rem;
    height: 100%;
    padding: 8px;

    display: flex;
    flex-direction: column;
`;

export const SectionGroup = styled(Group)`
	width: fit-content;
`

export const Item = styled.a`
    padding: 0.5rem;
    display: flex;
		cursor: pointer;
`;