import styled, { css, keyframes } from "styled-components";

import * as mixins from '@/styles/mixins';
import { types } from "@/styles/modal";

import type { Modal } from "@/components/molecules/modal/Modal";

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 100;
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 100;
	}
	to {
		opacity: 0;
	}
`;

const popUp = keyframes`
	from {
    transform: scale( 0.9 );
  }
  to {
    transform: scale( 1 );
  }
`;

const popOut = keyframes`
  from {
    transform: scale( 1 );
  }
  to {
    transform: scale( 0.9 );
  }
`;

export const Wrapper = styled.div<{$type: Modal, $modalState: boolean}>`
	width: 100vw;
	height: 100vh;

	${mixins.flexCenter};
	align-items: ${(props) => props.$type === 'search' ? 'start' : 'center'};

	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;

	background-color: ${(props) => props.$type !== 'alert' ? '#0000007e' : 'transparent'};

	${(props) => props.$modalState ?
		css`animation: ${fadeIn} 0.05s 0s 1 normal forwards;`
	:
		css`animation: ${fadeOut} 0.05s 0s 1 normal forwards;`
	};
`;

export const ModalBox = styled.div<{$type: Modal, $modalState: boolean}>`
	${(props) => (types[props.$type])};

	${mixins.flexColumn}

	padding: 0.75rem 1.25rem 0.75rem 1.25rem;

	border-radius: 1.5rem;
	background-color: white;

	${(props) => props.$modalState ?
		css`animation: ${popUp} 0.1s ease-in 0s 1 normal forwards;`
		:
		css`animation: ${popOut} 0.1s ease-out 0s 1 normal forwards;`
	};
`;