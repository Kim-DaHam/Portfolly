/* 2023-07-04 홈페이지에 들어가는 모든 Input styled - 김다함*/
import { styled } from 'styled-components';

import { HEADER_HEIGHT } from '../../organisms/header/Header.styled';

export const EditorContainer = styled.div`
	width: 100%;

  position: absolute;
  z-index: 10;
  top: 0;

	border: 0;

	.ql-toolbar {
    padding: 17px 0;

    text-align: center;

    border: 0;
		background-color: black;
  }

  .ql-stroke, .ql-fill {
    stroke: white;
  }

  .ql-picker-label {
    color: white;
  }

  .ql-container{
		width: 90%;

		display: flex;
		justify-content: center;

		margin: 0 5rem 0 5rem;

    border: 0;
		border: 1px solid red;
  }

  .ql-editor{
		width: 100%;
		height: calc(100vh - ${HEADER_HEIGHT});
  }
`