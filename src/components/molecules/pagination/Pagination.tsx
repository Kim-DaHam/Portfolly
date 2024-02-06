import { useEffect, useState } from "react";
import { TfiArrowCircleLeft as LeftArrowIcon, TfiArrowCircleRight as RightArrowIcon } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

import * as S from "@/components/molecules/pagination/Pagination.styled";
import { SetState } from "@/types";

type Props = {
	handlePage: SetState<number>;
	count: number;
	pageShow: number;
};

const PAGE_NUM = 9;
const HALF_PAGE = (PAGE_NUM - 1) / 2;
const SKIP_PAGE = (PAGE_NUM + 1);

export default function Pagination({handlePage, count, pageShow}: Props) {
	const [currentPage, setCurrentPage] = useState(1);
	const [startPage, setStartPage] = useState(1);
	const [endPage, setEndPage] = useState(PAGE_NUM);
	const [pages, setPages] = useState(1);

	const navigate = useNavigate();
	const pathname = window.location.pathname;

	const handlePagination = (page: number) => {
		const middle = (startPage + endPage) / 2
		const isBiggerThanMiddle = endPage !== pages && page > middle;
		const isSmallerThanMiddle = startPage > 1 && page < middle;
		const leftisLessThanPageNum = currentPage > PAGE_NUM && page > pages - (PAGE_NUM - 1);

		if(isBiggerThanMiddle || isSmallerThanMiddle) {
			const startPage = (page - HALF_PAGE) <= 1 ? 1 : (page - HALF_PAGE);
			const endPage = (page + HALF_PAGE) >= pages ? pages : (page + HALF_PAGE);
			setStartPage(startPage);
			setEndPage(endPage);
		}

		if(leftisLessThanPageNum) {
			setStartPage(pages - (PAGE_NUM - 1));
			setEndPage(pages);
		}

		setCurrentPage(page);
		handlePage(page);

		navigate(`${pathname}?tab=portfolios&page=${page}`);
		window.scrollTo(0, 0);
	};

	const handleNextSkip = () => {
		if(currentPage + SKIP_PAGE < pages) {
			handlePagination(currentPage + SKIP_PAGE);
			return;
		}
		handlePagination(pages);
	};

	const handlePrevSkip = () => {
		if(currentPage - SKIP_PAGE > 1) {
			handlePagination(currentPage - SKIP_PAGE);
			return;
		}
		handlePagination(1);
	};

	useEffect(() => {
		const pages = Math.ceil(count / pageShow);
		if(pages < PAGE_NUM) {
			setEndPage(pages);
		}
		setPages(pages);
	}, []);

	return(
		<S.Wrapper>
			{ startPage > 1 &&
				<LeftArrowIcon
					size={20}
					onClick={handlePrevSkip}
				/>
			}
			{	new Array(pages).fill(0).map((_, index: number) => {
				if(index < PAGE_NUM)
					return (
						<S.Page
							$active={currentPage === startPage + index && true}
							onClick={() => handlePagination(startPage+index)}
							key={index}>{startPage + index}
						</S.Page>
					);
			})}
			{ endPage < pages &&
				<RightArrowIcon
					size={20}
					onClick={handleNextSkip}
				/>
			}
		</S.Wrapper>
	)
}