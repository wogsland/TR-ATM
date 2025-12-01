interface Props {
  href?: string;
  onClick?: (event) => void;
}

export function ScreenButton({ href = "#", onClick }: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-lg bg-gray-300 px-7 py-1 hover:bg-gray-400 border-t-4 border-t-gray-200 border-b-4 border-b-gray-400"
    ></a>
  );
}
