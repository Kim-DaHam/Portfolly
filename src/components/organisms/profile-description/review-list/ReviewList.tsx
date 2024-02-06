import { useEffect, useState } from "react";

import * as S from "@/components/organisms/profile-description/review-list/ReviewList.styled";

import { Pagination, ReviewItem } from "@/components";

type Props = {
	reviews: any[];
};

const PAGE_SHOW = 10;

export default function ReviewList({ reviews }: Props) {
	const [page, setPage] = useState(1);

	useEffect(() => {
		const params = new URL(window.location.href).searchParams;
		const page = params.get('page') as string;
		setPage(Number(page));
	}, []);

	return(
		<S.Wrapper>
			<S.Content>
				{ reviews.map((review: any, index: number) => {
					const isRangeOfPage = index >= (page - 1) * PAGE_SHOW && index < page * PAGE_SHOW;

					if(isRangeOfPage) {
						return <ReviewItem review={review} key={index}/>;
					}
				})}
			</S.Content>

			<Pagination handlePage={setPage} count={reviews.length} pageShow={PAGE_SHOW} />
		</S.Wrapper>
	)
}