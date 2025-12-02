/* eslint no-empty-pattern: off */
import type { Route } from "./+types/deposit";
import { ATM } from "../components/atm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ATM" },
    { name: "description", content: "Please enter an amount to deposit" },
  ];
}

export default function Deposit() {
  return <ATM textVersion="deposit" />;
}
