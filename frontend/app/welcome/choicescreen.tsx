import { HiddenNumbersInput } from "./hiddennumbersinput";

interface Props {
  textVersion: "entry" | "pin" | "main" | "deposit" | "withdrawal" | "balance";
  choice: "options" | "hiddenNumbers" | "numbers";
  amount: number;
  setAmount: () => void;
}

export function ChoiceScreen({
  textVersion,
  choice,
  amount,
  setAmount,
}: Props) {
  const options = ["", "", "", "", "", "", "", ""];
  if ("entry" == textVersion) {
    options[7] = "Enter PIN";
  }
  if ("main" == textVersion || "balance" == textVersion) {
    options[2] = "Withdrawal";
    options[3] = "Deposit";
    options[5] = "Exit";
    options[6] = "Balance";
    options[7] = "Enter PIN";
  }
  if ("deposit" == textVersion || "withdrawal" == textVersion) {
    options[3] = "Cancel";
    options[7] = "Execute";
  }
  const optionGrid = (
    <div className="grid grid-cols-2">
      <div className="mb-10 text-xs text-left">{options[0]}</div>
      <div className="mb-10 text-xs text-right">{options[4]}</div>
      <div className="mb-10 text-xs text-left">{options[1]}</div>
      <div className="mb-10 text-xs text-right">{options[5]}</div>
      <div className="mb-10 text-xs text-left">{options[2]}</div>
      <div className="mb-10 text-xs text-right">{options[6]}</div>
      <div className="mb-7 text-xs text-left">{options[3]}</div>
      <div className="mb-7 text-xs text-right">{options[7]}</div>
    </div>
  );
  if ("options" == choice) {
    return optionGrid;
  }
  if ("hiddenNumbers" == choice) {
    const finishPin = async () => {
      const response = await fetch("http://localhost:3000/pin");
      const result = await response.json();
      if (result.success) {
        window.location.href =
          window.location.protocol + "//" + window.location.host + "/main";
      } else {
        alert("Incorrect PIN");
      }
    };
    return <HiddenNumbersInput finishPin={finishPin} />;
  }
  if ("numbers" == choice) {
    return (
      <div>
        <input
          className="bg-white text-gray-700 align-right"
          value={amount > 0 ? amount : ""}
          onChange={(event) => {
            setAmount(event.currentTarget.value);
          }}
        />
        {optionGrid}
      </div>
    );
  }
}
