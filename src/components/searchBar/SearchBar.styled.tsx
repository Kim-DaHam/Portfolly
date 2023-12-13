import { styled } from 'styled-components';

export const SearchBarContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 10px 0 10px;

    background-color: gray;
    border-radius: 16px;

    display: flex;
    align-items: center;
    gap: 10px;

`;

export const SearchInputArea = styled.input`
    height: 2rem;
    flex-grow: 1;
    cursor: pointer;
`

export const SearchLogo = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: black;
`;