import { GridBox, GridItem, PortfolioListLayout, ThumbnailImage, TitleBox } from "./PortfolioList.styled";

import Pagination from "@/components/molecules/pagination/Pagination";
import { Text } from "@/styles/Text.styled";


function PortfolioList() {
	return(
		<PortfolioListLayout>
			<GridBox>
				<GridItem>
					<ThumbnailImage>
						<img src="" alt="" />
					</ThumbnailImage>

					<TitleBox>
						<Text size='Medium'>Title</Text>
						<Text size='Small'>Date</Text>
					</TitleBox>
				</GridItem>
			</GridBox>

			<Pagination/>
		</PortfolioListLayout>
	)
}

export default PortfolioList;