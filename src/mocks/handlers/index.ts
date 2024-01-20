import { PortfolioHandlers } from "./portfolio";
import { toggleButtonHandlers } from "./toggleButton";
import { userHandlers } from "./user";

export const handlers = PortfolioHandlers
.concat(userHandlers)
.concat(toggleButtonHandlers);