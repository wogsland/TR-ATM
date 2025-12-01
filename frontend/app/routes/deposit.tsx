/* eslint no-empty-pattern: off */
import type { Route } from "./+types/pin";
import { ATM } from "../welcome/atm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ATM" },
    { name: "description", content: "Please enter an amount to deposit" },
  ];
}

export default function Balance() {
  return <ATM textVersion="deposit" />;
}
