import { Section } from "@/types/portfolio";
import { PortfolioItemContainer, Thumnail } from "./PortfolioItem.styled";

function PortfolioItem(props: {type: Section}){
    const type = props.type;

    return(
        <PortfolioItemContainer type={type}>
            <Thumnail>

            </Thumnail>
        </PortfolioItemContainer>
    )
}

export default PortfolioItem;