/* eslint no-empty-pattern: off */
import type { Route } from "./+types/balance";
import { ATM } from "../components/atm";

export function meta({}: Route.MetaArgs) {
  return [{ title: "ATM" }, { name: "description", content: "Your balance" }];
}

export default function Balance() {
  return <ATM textVersion="balance" />;
}
