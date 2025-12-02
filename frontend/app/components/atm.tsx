import { useState } from "react";
import { Cards } from "./cards";
import { Screen } from "./screen";
import { ScreenButton } from "./screenbutton";

interface Props {
  textVersion?: "entry" | "pin" | "main" | "deposit" | "withdrawal" | "balance";
}

export function ATM({ textVersion = "entry" }: Props) {
  const [amount, setAmount] = useState(0);

  const selectedCard =
    textVersion != "entry" && textVersion != "pin" ? "visa" : undefined;

  const deposit = async (amount: number) => {
    const response = await fetch("http://localhost:3000/deposit/" + amount);
    if (response.status == 200) {
      window.location.href =
        window.location.protocol + "//" + window.location.host + "/balance";
    } else {
      alert("Error depositing");
    }
  };

  const withdraw = async (amount: number) => {
    const response = await fetch("http://localhost:3000/withdraw/" + amount);
    if (response.status == 200) {
      window.location.href =
        window.location.protocol + "//" + window.location.host + "/balance";
    } else {
      alert("Error withdrawing");
    }
  };

  const executeTransaction = () => {
    if ("deposit" == textVersion) {
      deposit(amount);
    }
    if ("withdrawal" == textVersion) {
      withdraw(amount);
    }
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center min-h-0">
        <header className="relative flex flex-col items-center gap-9 rounded-[1vw] pr-20 pl-20 pt-4 pb-4 bg-[#1b6eac]">
          <div className="w-[400px]">
            <img
              src="../../assets/atm_sign.png"
              alt="ATM"
              className="block w-full"
            />
          </div>
          <div className="absolute bottom-18 left-64 w-[280px]">
            <img
              src="../../assets/graffiti.png"
              alt="ATM"
              className="block w-full"
            />
          </div>
        </header>
        <Cards selected={selectedCard} />
        <div className="w-[500px] max-w-[100vw] p-4 flex bg-white items-end">
          <div className="w-[105px] max-w-[100vw] pb-4 pt-4">
            <ul className="">
              <li className="relative mb-8">
                <div className="w-[60px] absolute bottom-42 left-0 mb-8">
                  <ScreenButton side="right" />
                </div>
                <div className="absolute bottom-50.5 right-0 text-gray-400">
                  ▬▬
                </div>
              </li>
              <li className="relative mb-8">
                <div className="w-[60px] absolute bottom-28 left-0 mb-8">
                  <ScreenButton side="right" />
                </div>
                <div className="absolute bottom-36.5 right-0 text-gray-400">
                  ▬▬
                </div>
              </li>
              <li className="relative mb-8">
                <div className="w-[60px] absolute bottom-14 left-0 mb-8">
                  <ScreenButton
                    href={
                      "main" == textVersion || "balance" == textVersion
                        ? "withdrawal"
                        : undefined
                    }
                  />
                </div>
                <div className="absolute bottom-22.5 right-0 text-gray-400">
                  ▬▬
                </div>
              </li>
              <li className="relative mb-8">
                <div className="w-[60px] absolute bottom-0 left-0 mb-8">
                  <ScreenButton
                    href={
                      "main" == textVersion || "balance" == textVersion
                        ? "deposit"
                        : "deposit" == textVersion ||
                            "withdrawal" == textVersion
                          ? "main"
                          : undefined
                    }
                  />
                </div>
                <div className="absolute bottom-8.5 right-0 text-gray-400">
                  ▬▬
                </div>
              </li>
            </ul>
          </div>
          <Screen
            textVersion={textVersion}
            amount={amount}
            setAmount={setAmount}
          />
          <div className="w-[105px] max-w-[100vw] pb-4 pt-4">
            <ul>
              <li className="relative mb-8">
                <div className="absolute bottom-50.5 left-0 text-gray-400">
                  ▬▬
                </div>
                <div className="w-[60px] absolute bottom-42 right-0 mb-8">
                  <ScreenButton />
                </div>
              </li>
              <li className="relative mb-8">
                <div className="absolute bottom-36.5 left-0 text-gray-400">
                  ▬▬
                </div>
                <div className="w-[60px] absolute bottom-28 right-0 mb-8">
                  <ScreenButton
                    href={
                      "main" == textVersion || "balance" == textVersion
                        ? "/"
                        : undefined
                    }
                  />
                </div>
              </li>
              <li className="relative mb-8">
                <div className="absolute bottom-22.5 left-0 text-gray-400">
                  ▬▬
                </div>
                <div className="w-[60px] absolute bottom-14 right-0 mb-8">
                  <ScreenButton
                    href={
                      "main" == textVersion || "balance" == textVersion
                        ? "balance"
                        : undefined
                    }
                  />
                </div>
              </li>
              <li className="relative mb-8">
                <div className="absolute bottom-8.5 left-0 text-gray-400">
                  ▬▬
                </div>
                <div className="w-[60px] absolute bottom-0 right-0 mb-8">
                  <ScreenButton
                    href={"deposit" != textVersion ? "pin" : undefined}
                    onClick={(e) => {
                      if (
                        "deposit" == textVersion ||
                        "withdrawal" == textVersion
                      ) {
                        e.preventDefault();
                        executeTransaction();
                      }
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-[500px] pb-200 bg-white">
          <div className="absolute top-[-65px] left-8 w-[200px]">
            <img
              src="../../assets/sticker_graf.png"
              alt="ATM"
              className="block w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
