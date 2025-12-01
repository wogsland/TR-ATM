import { HiddenNumbersInput } from "./hiddennumbersinput";

interface Props {
  textVersion: "entry" | "pin" | "main" | "deposit" | "withdrawal" | "balance";
  choice: "options" | "hiddenNumbers" | "numbers";
}

export function ChoiceScreen({ textVersion, choice }: Props) {
  if ("options" == choice) {
    const options = ["---", "---", "---", "---", "---", "---", "---", "---"];
    if ("entry" == textVersion) {
      options[7] = "Enter PIN ---";
    }
    if ("main" == textVersion) {
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
    const finishPin = () => {
      window.location.href =
        window.location.protocol + "//" + window.location.host + "/main";
    };
    return <HiddenNumbersInput finishPin={finishPin} />;
  }
}
