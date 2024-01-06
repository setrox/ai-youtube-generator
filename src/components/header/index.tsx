import React from "react";

const Header = () => {
  return (
    <header className="bg-app">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 text-2xl font-bold">
            Your company Name
          </a>
        </div>

        <div className="flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 hover:text-green"
          >
            Log in <span aria-hidden="true">&nbsp; &rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
