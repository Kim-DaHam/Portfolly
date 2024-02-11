import styled, { css } from "styled-components";

export const Wrapper = styled.div<{$fileType: 'image' | 'file'}>`
	${props => props.$fileType === 'image' ?
		css`
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;

			justify-content: space-between;
			align-items: center;
			gap: 0.3rem;
		`
		:
		css`
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		`
	};

	& img {
		border-radius: 0.4rem;
	}
	& img:hover {
		cursor: pointer;
	}
`;

export const FileItem = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	flex-basis: 1;
	gap: 0.5rem;
	cursor: pointer;

	&:hover {
		& span {
			text-decoration: underline;
		}
	}

	& span {
		display: block;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	& svg {
		flex: none;
	}
`;