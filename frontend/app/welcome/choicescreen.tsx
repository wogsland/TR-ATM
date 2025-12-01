interface Props {
  textVersion: "entry" | "pin" | "main" | "deposit" | "withdrawal" | "balance";
  choice: "options" | "hiddenNumbers" | "numbers";
};

export function ChoiceScreen({textVersion, choice}: Props) {
  if ("options" == choice) {
    const options = [
      "---",
      "---",
      "---",
      "---",
      "---",
      "---",
      "---",
      "Enter PIN ---",
    ];
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
    return(
      <div className="text-gray-700 dark:text-gray-200 text-center">
      _ _ _ _ _ _
      </div>
    );
  }
}
