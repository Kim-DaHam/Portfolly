import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 3.5rem;
    background-color: lightgray;
    padding: 0.3rem 2rem 0.3rem 2rem;

    position: fixed;
    top: 0;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.9rem;
`

export const LogoWrapper = styled.div`
    width: 3.1rem;
    height: 100%;
    background-color: black;
    cursor: pointer;
`;

export const LogInButton = styled.button`
    padding: 0 1rem 0 1rem;
`;

export const TrialVersionButton = styled.button`
    padding: 0 1rem 0 1rem;
`;

export const MenuButton = styled.button`
    padding: 0 1rem 0 1rem;
    padding: 0 1rem 0 1rem;
`;