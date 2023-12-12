import { styled } from 'styled-components';

export const PopperContainer = styled.div<{bottom: number, right: number}>`
    width: 15rem;
    background-color: lightgray;
    border-radius: 16px;

    position: fixed;

    display: flex;
    flex-direction: column;

    top: ${(props)=>props.bottom + 10}px;
    right: ${(props)=>props.right}px;
`;

export const Separator = styled.div`
    width: 100%;
    height: 0.1rem;
    background-color: black;
`;

export const Group = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;

    display: flex;
    flex-direction: column;
`;

export const Item = styled.a`
    padding: 0.5rem;
    display: flex;
`;