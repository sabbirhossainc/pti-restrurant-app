import { LuUser2 } from "react-icons/lu";
import { PiCaretDownBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { useState} from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navcom() {
  const [collapsed, setCollapsed] = useState(true);


  let { pathname } = useLocation();
  let subpage = pathname.split("/")?.[1];

  function ActiveLink(type = null) {
    let classes =
      "text-gray-900 hover:bg-gray-200 hover:text-orange font-serif block px-4 py-2 text-sm";

    if (type === subpage) {
      classes += " bg-gray-300 text-orange";
    } else {
      classes += " bg-gray-50 text-gray-900";
    }
    return classes;
  }

  return (
    <>
      <header className="text-gray-600 body-font mx-auto max-w-7xl">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center gap-x-3 gap-y-3">
          <Link
            to={"/"}
            className="flex items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="font-bold text-4xl font-serif">pti.</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-x-2 gap-y-3">
            <form>
              <div className="relative gap-x-2">
                <div className="absolute inset-y-0 py-2 start-0 flex items-center ps-3 pointer-events-none">
                  <IoSearch className="text-orange text-2xl hover:text-black rounded-full w-5 h-5" />
                </div>
                <input
                  type="search"
                  id="search"
                  name="search"
                  role="combobox"
                  aria-label="Search components"
                  className="min-w-0 flex-auto md:w-96 rounded-lg border-0 bg-gray-50 px-8 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-orange-light outline-none text-xs font-semibold sm:text-sm sm:leading-6"
                  placeholder=" Search Audiobook"
                />
              </div>
            </form>
            <menu className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="uppercase inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-gray-50 px-3 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setCollapsed((prev) => !prev)}
                >
                  <div className="inline-flex items-center font-sans">
                    Menu
                    <PiCaretDownBold className="text-orange ml-12 hover:text-orange-light rounded-full w-7 h-7" />
                  </div>
                </button>
              </div>

              <div
                className={`${
                  collapsed
                    ? "hidden transition-transform ease-in-out delay-150"
                    : "md:block transition-transform ease-in-out delay-150"
                } absolute left-0 z-10 mt-2 w-36 origin-top-right rounded-lg bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <Link to="/">
                    <div
                      className={ActiveLink("")}
                      role="menuitem"
                      id="menu-item"
                    >
                      Home
                    </div>
                  </Link>
                  <Link to="/details">
                    <div
                      className={ActiveLink("details")}
                      role="menuitem"
                      id="menu-item"
                    >
                      Details
                    </div>
                  </Link>
                  <Link to="/category">
                    <div
                      className={ActiveLink("category")}
                      role="menuitem"
                      id="menu-item"
                    >
                      Category
                    </div>
                  </Link>
                  <Link to="/my-favorites">
                    <div
                      className={ActiveLink("my-favorites")}
                      role="menuitem"
                      id="menu-item"
                    >
                      My Favorites
                    </div>
                  </Link>
                  <Link to="/profile">
                    <div
                      className={ActiveLink("profile")}
                      role="menuitem"
                      id="menu-item"
                    >
                      Profile
                    </div>
                  </Link>
                  <form method="POST" action="/accounts" role="none">
                    <Link to="/accounts">
                      <div
                        className={ActiveLink("accounts")}
                        role="menuitem"
                        id="menu-item"
                      >
                        Log in/Sign Up
                      </div>
                    </Link>
                  </form>
                </div>
              </div>
            </menu>
          </nav>
            <Link to={`/profile`}>
          <button className="size-12 inline-flex items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-orange-light rounded-full">
            <LuUser2 className="text-gray-200 rounded-full w-8 h-8" />
          </button>
            </Link>
        </div>
      </header>
    </>
  );
}
