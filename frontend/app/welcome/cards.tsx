interface Props {
  selected?: "star" | "pulse" | "maestro" | "mastercard" | "plus" | "visa";
}

export function Cards({ selected }: Props) {
  console.log("selected", selected);
  return (
    <div className="w-[500px] max-w-[100vw] p-4 flex flex-col items-center bg-white">
      <img
        src="../../assets/creditcard_sprite.png"
        alt="ATM"
        className="block w-full dark:hidden"
      />
      <img
        src="../../assets/creditcard_sprite.png"
        alt="ATM"
        className="hidden w-[50%] dark:block"
      />
    </div>
  );
}
