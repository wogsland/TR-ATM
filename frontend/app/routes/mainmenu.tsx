/* eslint no-empty-pattern: off */
import type { Route } from "./+types/main";
import { ATM } from "../components/atm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ATM" },
    { name: "description", content: "Please make a choice..." },
  ];
}

export default function MainMenu() {
  return <ATM textVersion="main" />;
}
