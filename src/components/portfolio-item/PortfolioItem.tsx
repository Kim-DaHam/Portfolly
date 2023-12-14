import { PortfolioItemContainer, Thumnail } from "@/components/portfolio-item/PortfolioItem.styled";
import { Section } from "@/types/portfolio";

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