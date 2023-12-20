import { GridBox, GridItem, PortfolioListLayout, Span, ThumbnailImage, Title, TitleBox } from "./PortfolioList.styled";

import Pagination from "@/components/molecules/pagination/Pagination";


function PortfolioList() {
	return(
		<PortfolioListLayout>
			<GridBox>
				<GridItem>
					<ThumbnailImage>
						<img src="" alt="" />
					</ThumbnailImage>
					<TitleBox>
						<Title>Title</Title>
						<Span>Date</Span>
					</TitleBox>
				</GridItem>
			</GridBox>

			<Pagination/>
		</PortfolioListLayout>
	)
}

export default PortfolioList;