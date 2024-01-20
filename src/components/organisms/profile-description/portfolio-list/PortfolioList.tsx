import { Text, Pagination } from "@/components";
import * as S from "@/components/organisms/profile-description/portfolio-list/PortfolioList.styled";

type Props = {
	user: any;
}

export default function PortfolioList({user}: Props) {
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