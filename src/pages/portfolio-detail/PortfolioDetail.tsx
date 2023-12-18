import { AskButton, GridBox, HtmlContentBox, InformationBox, PortfolioContentSection, PortfolioDetailContainer, PortfolioDetailLayout, RightSideSection, SummaryBox, TagBox, TitleBox, UserBox } from "./PortfolioDetail.styeld";

import Header from "@/components/header/Header";
import Profile from "@/components/profile/Profile";

function PortfolioDetail(){
	return(
		<PortfolioDetailLayout>
			<Header/>
			<PortfolioDetailContainer>
				<PortfolioContentSection>
					<HtmlContentBox>
						HtmlContentBox
					</HtmlContentBox>
				</PortfolioContentSection>

				<RightSideSection>
					<UserBox>
						<Profile type='Default'/>
						<AskButton color='White'>문의하기</AskButton>
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

			</PortfolioDetailContainer>
		</PortfolioDetailLayout>
	)
}

export default PortfolioDetail;