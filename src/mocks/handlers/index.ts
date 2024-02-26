import { commissionHandlers } from "./commission";
import { messageHandlers } from "./message";
import { PortfolioHandlers } from "./portfolio";
import { toggleButtonHandlers } from "./toggleButton";
import { userHandlers } from "./user";

import type { Authority } from "@/types";

export const LOGIN_ID = 'expert1';
export const AUTHORITY: Authority = 'expert';
export const PARTNER_AUTHORITY = AUTHORITY === String('expert') ? 'client' : 'expert';
export const MY_ID = AUTHORITY + 'Id';

export const handlers = PortfolioHandlers
.concat(userHandlers)
.concat(toggleButtonHandlers)
.concat(commissionHandlers)
.concat(messageHandlers);