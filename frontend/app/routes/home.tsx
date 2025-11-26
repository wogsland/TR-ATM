/* eslint no-empty-pattern: off */
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ATM" },
    { name: "description", content: "Welcome to the ATM" },
  ];
}

export default function Home() {
  return <Welcome />;
}
