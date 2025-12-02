interface Props {
  selected?: "star" | "pulse" | "maestro" | "mastercard" | "plus" | "visa";
}

export function Cards({ selected }: Props) {
  const starLogo = () => {
    if ("star" == selected) {
      return <div className="star-active w-[30px]" />;
    } else {
      return <div className="star-inactive w-[30px]" />;
    }
  };

  const pulseLogo = () => {
    if ("pulse" == selected) {
      return <div className="pulse-active w-[50px]" />;
    } else {
      return <div className="pulse-inactive w-[50px]" />;
    }
  };

  const maestroLogo = () => {
    if ("maestro" == selected) {
      return <div className="maestro-active w-[45px]" />;
    } else {
      return <div className="maestro-inactive w-[45px]" />;
    }
  };

  const mastercardLogo = () => {
    if ("mastercard" == selected) {
      return <div className="mastercard-active w-[45px]" />;
    } else {
      return <div className="mastercard-inactive w-[45px]" />;
    }
  };

  const plusLogo = () => {
    if ("plus" == selected) {
      return <div className="plus-active w-[30px]" />;
    } else {
      return <div className="plus-inactive w-[30px]" />;
    }
  };

  const visaLogo = () => {
    if ("visa" == selected) {
      return <div className="visa-active w-[40px]" />;
    } else {
      return <div className="visa-inactive w-[40px]" />;
    }
  };

  return (
    <div>
      <div className="w-[500px] max-w-[100vw] pt-4 pr-4 pl-4 flex flex-col items-center bg-white border-t-8 border-gray-300">
        <div className="grid grid-cols-6">
          {starLogo()}
          {pulseLogo()}
          {maestroLogo()}
          {mastercardLogo()}
          {plusLogo()}
          {visaLogo()}
        </div>
      </div>
    </div>
  );
}
