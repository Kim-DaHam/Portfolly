import { css, styled } from "styled-components";

export const FlexBox = styled.div<{gap?:string, align?:string, justify?:string}>`
	width: 100%;

	display: flex;
	${(props)=>{
		return css`
			gap: ${props.gap};
			justify-content: ${props.justify};
			align-items: ${props.align};
		`
	}}

	border: 1px solid black;
`;

export const FlexColumnBox = styled(FlexBox)`
	flex-direction: column;

	background-color: skyblue;
`;
