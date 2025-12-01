import { useEffect, useState } from "react";

interface Props {
  finishPin: () => void;
}
export function HiddenNumbersInput({ finishPin }: Props) {
  const [value, setValue] = useState("_ _ _ _ _ _");
  useEffect(() => {
    function keyDownHandler(e: globalThis.KeyboardEvent) {
      e.preventDefault();
      setValue(value.replace("_", "*"));
    }
    if( value.indexOf("_") < 0) {
      finishPin();
    }
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [value]);
  return(
    <div className="text-gray-700 dark:text-gray-200 text-center items-center">
    {value}<br />
    </div>
  );
}
