import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("balance", "routes/balance.tsx"),
  route("deposit", "routes/deposit.tsx"),
  route("main", "routes/mainmenu.tsx"),
  route("pin", "routes/pin.tsx"),
  route("withdrawal", "routes/withdrawal.tsx"),
] satisfies RouteConfig;
