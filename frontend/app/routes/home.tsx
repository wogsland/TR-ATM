/* eslint no-empty-pattern: off */
import type { Route } from "./+types/home";
import { ATM } from "../components/atm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ATM" },
    { name: "description", content: "Welcome to the ATM" },
  ];
}

export default function Home() {
  return <ATM textVersion="entry" />;
}
