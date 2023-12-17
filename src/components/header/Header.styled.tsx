import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 3.5rem;
    background-color: lightgray;
    padding: 0.3rem 2rem 0.3rem 2rem;

    position: fixed;
    z-index: 999;
    top: 0;

    display: grid;
    grid-template-columns: 0.1fr 0.75fr 0.8fr 1fr;
		column-gap: 1rem;
		justify-content: space-between;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.9rem;
`

export const LogoBox = styled.div`
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

export const SectionMenuBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.9rem;
`;

export const SectionTitle = styled.div`
	height: 100%;
	font-weight: 600;
	font-size: 1.5em;
	display: flex;
	align-items: center;
`;