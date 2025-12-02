/* eslint no-empty-pattern: off */
import type { Route } from "./+types/pin";
import { ATM } from "../components/atm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ATM" },
    { name: "description", content: "Please enter your PIN" },
  ];
}

export default function Pin() {
  return <ATM textVersion="pin" />;
}
