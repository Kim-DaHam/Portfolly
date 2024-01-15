import { Pagination } from "@/components/molecules";
import * as S from "@/components/organisms/profile-description/portfolio-list/PortfolioList.styled";
import { Text } from "@/styles/Text.styled";

export default function PortfolioList() {
	return(
		<S.Wrapper>
			<S.GridBox>
				<S.GridItem>
					<S.Thumbnail>
						<img src="" alt="" />
					</S.Thumbnail>

					<S.TitleBox>
						<Text size='Medium'>Title</Text>
						<Text size='Small'>Date</Text>
					</S.TitleBox>
				</S.GridItem>
			</S.GridBox>

			<Pagination/>
		</S.Wrapper>
	)
}