import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("pin","routes/pin.tsx"),
  route("main","routes/mainmenu.tsx"),
] satisfies RouteConfig;
