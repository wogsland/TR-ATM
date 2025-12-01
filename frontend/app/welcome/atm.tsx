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
        <header className="flex flex-col items-center gap-9 rounded-[1vw] pr-20 pl-20 pt-4 pb-4 bg-[#1b6eac]">
          <div className="w-[400px]">
            <img
              src="../../assets/atm_sign.png"
              alt="ATM"
              className="block w-full"
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
                <ScreenButton
                  href={
                    "main" == textVersion || "balance" == textVersion
                      ? "withdrawal"
                      : undefined
                  }
                />
              </li>
              <li className="mb-3">
                <ScreenButton
                  href={
                    "main" == textVersion || "balance" == textVersion
                      ? "deposit"
                      : "deposit" == textVersion || "withdrawal" == textVersion
                        ? "main"
                        : undefined
                  }
                />
              </li>
            </ul>
          </div>
          <Screen
            textVersion={textVersion}
            amount={amount}
            setAmount={setAmount}
          />
          <div className="w-[100px] max-w-[100vw] p-4">
            <ul>
              <li className="mb-3">
                <ScreenButton />
              </li>
              <li className="mb-3">
                <ScreenButton
                  href={
                    "main" == textVersion || "balance" == textVersion
                      ? "/"
                      : undefined
                  }
                />
              </li>
              <li className="mb-3">
                <ScreenButton
                  href={
                    "main" == textVersion || "balance" == textVersion
                      ? "balance"
                      : undefined
                  }
                />
              </li>
              <li className="mb-3">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
