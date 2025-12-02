interface Props {
  selected?: "star" | "pulse" | "maestro" | "mastercard" | "plus" | "visa";
}

export function Cards({ selected }: Props) {
  console.log("selected", selected);
  return (
    <div className="w-[500px] max-w-[100vw] pt-4 pr-4 pl-4 flex flex-col items-center bg-white border-t-8 border-gray-300">
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
