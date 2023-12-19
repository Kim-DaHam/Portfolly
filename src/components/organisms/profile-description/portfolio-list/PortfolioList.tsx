import { GridBox, GridItem, PortfolioListLayout, Span, ThumbnailImage, Title, TitleBox } from "./PortfolioList.styled";

import Pagenation from "@/components/molecules/pagenation/Pagenation";


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

			<Pagenation/>
		</PortfolioListLayout>
	)
}

export default PortfolioList;