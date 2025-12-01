interface Props {
  href?: string;
};

export function ScreenButton({ href = "#" }: Props) {
  return (
    <a
      href={href}
      className="rounded-md bg-gray-500 px-10 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
    ></a>
  );
}
