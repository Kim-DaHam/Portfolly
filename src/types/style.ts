import { Section } from "./portfolio"

export type PortfolioItemSize = {
    [key in Section]: {
        aspectRatio: string
    }
}
