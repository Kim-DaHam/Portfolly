import styled from "styled-components";

export const Wrapper = styled.div<{type: 'filter' | 'keyword'}>`
	width: 100%;
	height: 3rem;
	background-color: salmon;
`;