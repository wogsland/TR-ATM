import { useState } from "react";
import { Cards } from "./cards";
import { Screen } from "./screen";
import { ScreenButton } from "./screenbutton";

interface Props {
  textVersion?: "entry" | "pin" | "main" | "deposit" | "withdrawal" | "balance";
}

export function ATM({ textVersion = "entry" }: Props) {
  const selectedCard = textVersion != "entry" && textVersion != "pin" ? "visa" : undefined;
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src="../../assets/atm_sign.png"
              alt="ATM"
              className="block w-full dark:hidden"
            />
            <img
              src="../../assets/atm_sign.png"
              alt="ATM"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <Cards selected={selectedCard} />
        <div className="w-[500px] max-w-[100vw] p-4 flex bg-white items-end">
          <div className="w-[100px] max-w-[100vw] p-4">
            <ul className="">
              <li className="mb-3">
                <ScreenButton />
              </li>
              <li className="mb-3">
                <ScreenButton />
              </li>
              <li className="mb-3">
                <ScreenButton />
              </li>
              <li>
                <ScreenButton />
              </li>
            </ul>
          </div>
          <Screen textVersion={textVersion} />
          <div className="w-[100px] max-w-[100vw] p-4">
            <ul>
              <li className="mb-3">
                <ScreenButton />
              </li>
              <li className="mb-3">
                <ScreenButton />
              </li>
              <li className="mb-3">
                <ScreenButton />
              </li>
              <li>
                <ScreenButton href="pin" />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[500px] max-w-[100vw] p-4 flex flex-col items-right bg-white">
          <div className="w-[100px]">
            <img
              src="../../assets/systems.png"
              alt="systems"
              className="block w-full dark:hidden"
            />
            <img
              src="../../assets/systems.png"
              alt="systems"
              className="hidden w-full dark:block"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
