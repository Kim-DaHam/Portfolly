import { Section } from '@/types/portfolio';
import {styled} from 'styled-components';
import { portfolioItemSize as sizes } from '@/styles/token';

export const PortfolioItemContainer = styled.div<{type: Section}>`
    width: 100%;
    aspect-ratio: ${(props) => sizes[props.type].aspectRatio};

    padding: 1.4em 1.5em 1.4em 1.5em;

    background-color: lightgray;
    border-radius: 1.8rem;
    overflow: auto;
`

export const Thumnail = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1.8rem;

    overflow: hidden;
    background-color: gray;
`;