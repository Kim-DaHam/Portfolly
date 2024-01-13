import { PortfolioHandlers } from "./portfolio";
import { toggleButtonHandlers } from "./toggleButton";

export const handlers = PortfolioHandlers
  .concat(toggleButtonHandlers);