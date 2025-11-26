export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src="../../assets/atm_sign.png"
              alt="ATM"
              className="block w-full dark:hidden"
            />
            <img
              src="../../assets/atm_sign.png"
              alt="ATM"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
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
        <div className="w-[500px] max-w-[100vw] p-4 flex bg-white items-end">
          <div className="w-[100px] max-w-[100vw] p-4">
            <ul className="">
              <li className="mb-3">
                <a
                  href="#"
                  className="rounded-md bg-gray-500 px-10 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ></a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="rounded-md bg-gray-500 px-10 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ></a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="rounded-md bg-gray-500 px-10 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md bg-gray-500 px-10 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ></a>
              </li>
            </ul>
          </div>
          <div className="max-w-[300px] w-full space-y-6 px-4">
            <nav className="border border-gray-200 p-6 dark:border-gray-200 space-y-4 bg-blue-400">
              <p className="leading-8 text-gray-700 dark:text-gray-200 text-center">
                Welcome to the ATM
              </p>
              <div className="mt-10 flex items-justify gap-x-6">
                <ul>
                  <li>---</li>
                  <li>---</li>
                  <li>---</li>
                  <li>---</li>
                </ul>
                <ul>
                  <li>---</li>
                  <li>---</li>
                  <li>---</li>
                  <li>Enter PIN ---</li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="w-[100px] max-w-[100vw] p-4">
            <ul>
              <li className="mb-3">
                <a
                  href="#"
                  className="rounded-md bg-gray-500 px-10 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ></a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="rounded-md bg-gray-500 px-10 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ></a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="rounded-md bg-gray-500 px-10 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md bg-gray-500 px-10 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[500px] max-w-[100vw] p-4 flex flex-col items-right bg-white">
          <div className="w-[100px]">
            <img
              src="../../assets/systems.png"
              alt="systems"
              className="block w-full dark:hidden"
            />
            <img
              src="../../assets/systems.png"
              alt="systems"
              className="hidden w-full dark:block"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
