import { GridBox, HtmlContentBox, InformationBox, PortfolioContentSection, PortfolioDetailLayout, RightSideSection, SummaryBox, TagBox, TitleBox, UserBox } from "./PortfolioDetail.styeld";

import Header from "@/components/header/Header";

function PortfolioDetail(){
	return(
		<PortfolioDetailLayout>
			<Header/>
			<PortfolioContentSection>
				<HtmlContentBox>
					HtmlContentBox
				</HtmlContentBox>
			</PortfolioContentSection>

			<RightSideSection>
				<UserBox>
					UserBox
				</UserBox>
				<InformationBox>
					<TitleBox>
						TitleBox
					</TitleBox>
					<TagBox>
						TagBox
					</TagBox>
					<SummaryBox>
						SummaryBox
					</SummaryBox>
				</InformationBox>
				<GridBox>
					GridBox
				</GridBox>
			</RightSideSection>
		</PortfolioDetailLayout>
	)
}

export default PortfolioDetail;