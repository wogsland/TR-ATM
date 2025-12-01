import { ChoiceScreen } from "./choicescreen";

interface Props {
  textVersion?: "entry" | "pin" | "main" | "deposit" | "withdrawal" | "balance";
}

export function Screen({ textVersion = "entry" }: Props) {
  const title = {
    entry: "Welcome to the ATM",
    pin: "Please enter your PIN",
    main: "Hi Peter Parker! Please make a choice...",
    deposit: "Please enter an amount to deposit",
    withdrawal: "Please enter an amount to withdrawal",
    balance: "Your current balance is ",
  };
  const choice =
    "pin" == textVersion
      ? "hiddenNumbers"
      : "deposit" == textVersion || "withdrawal" == textVersion
        ? "numbers"
        : "options";
  return (
    <div className="max-w-[300px] w-full space-y-6 px-4">
      <nav className="border border-gray-200 p-6 dark:border-gray-200 space-y-4 bg-blue-400">
        <p className="leading-8 text-gray-700 dark:text-gray-200 text-center">
          {title[textVersion]}
        </p>
        <ChoiceScreen textVersion={textVersion} choice={choice} />
      </nav>
    </div>
  );
}
