import { commissionHandlers } from "./commission";
import { messageHandlers } from "./message";
import { PortfolioHandlers } from "./portfolio";
import { toggleButtonHandlers } from "./toggleButton";
import { userHandlers } from "./user";

export const LOGIN_ID = 100;
export const AUTHORITY: string = 'client';
export const PARTNER_ID = AUTHORITY === 'expert' ? 'clientId' : 'expertId';
export const MY_ID = AUTHORITY + 'Id';

export const handlers = PortfolioHandlers
.concat(userHandlers)
.concat(toggleButtonHandlers)
.concat(commissionHandlers)
.concat(messageHandlers);