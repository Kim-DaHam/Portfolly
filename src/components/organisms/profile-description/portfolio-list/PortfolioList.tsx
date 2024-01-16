import { Text, Pagination } from "@/components";
import * as S from "@/components/organisms/profile-description/portfolio-list/PortfolioList.styled";

export default function PortfolioList() {
	return(
		<S.Wrapper>
			<S.GridBox>
				<S.GridItem>
					<S.Thumbnail>
						<img src="" alt="" />
					</S.Thumbnail>

					<S.TitleBox>
						<Text type='common'>Title</Text>
						<Text type='small'>Date</Text>
					</S.TitleBox>
				</S.GridItem>
			</S.GridBox>

			<Pagination/>
		</S.Wrapper>
	)
}