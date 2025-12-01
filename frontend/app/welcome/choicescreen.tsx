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
  if ("options" == choice) {
    const options = ["---", "---", "---", "---", "---", "---", "---", "---"];
    if ("entry" == textVersion) {
      options[7] = "Enter PIN ---";
    }
    if ("main" == textVersion || "balance" == textVersion) {
      options[2] = "Withdrawal";
      options[3] = "Deposit";
      options[5] = "Exit";
      options[6] = "Balance";
      options[7] = "Re-Enter PIN";
    }
    return (
      <div className="mt-10 flex items-justify gap-x-6">
        <ul>
          <li>{options[0]}</li>
          <li>{options[1]}</li>
          <li>{options[2]}</li>
          <li>{options[3]}</li>
        </ul>
        <ul>
          <li>{options[4]}</li>
          <li>{options[5]}</li>
          <li>{options[6]}</li>
          <li>{options[7]}</li>
        </ul>
      </div>
    );
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
        <div className="mt-10 flex items-justify gap-x-6">
          <ul>
            <li>---</li>
          </ul>
          <ul>
            <li>Execute</li>
          </ul>
        </div>
      </div>
    );
  }
}
