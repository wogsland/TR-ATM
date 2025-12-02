/* eslint no-empty-pattern: off */
import type { Route } from "./+types/withdrawal";
import { ATM } from "../components/atm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ATM" },
    { name: "description", content: "Please enter an amount to withdraw" },
  ];
}

export default function Withdrawal() {
  return <ATM textVersion="withdrawal" />;
}
