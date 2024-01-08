import { useState, Fragment } from "react";
import { Menu } from "@headlessui/react";
import { LuUser2 } from "react-icons/lu";
import { PiCaretDownBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
// import { Link} from "react-router-dom";
// import { Field, Label } from '@/components/fieldset'
// import { Select } from '@/components/select'

export default function Navcompo() {
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

  // const links = [
  //   { href: `/`, label: "Home", id: "menu-item-1" },
  //   { href: `/details`, label: "Details", id: "menu-item-2" },
  //   { href: `/category`, label: "Category", id: "menu-item-3" },
  //   {
  //     href: `/my-favorites`,
  //     label: "My Favorites",
  //     id: "menu-item-4",
  //   },
  //   { href: `/profile`, label: "Profile", id: "menu-item-5"},
  //   {
  //     href: `/accounts`,
  //     label: "Log in/Sign Up",
  //     id: "menu-item-5",
  //   },
  // ];

  // const [collapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState(true);

  const toggleItem = () => setActive(!active);
  // const { categorys } = useLoaderData();

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
            {/* <div className="relative inline-block text-left"> */}
            <Menu role="menuitem" key={active} as={Fragment}>
              <Menu.Button
                className="uppercase inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-gray-50 px-3 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <div className="inline-flex items-center font-sans">
                  Menu
                  <PiCaretDownBold className="text-orange ml-12 hover:text-orange-light rounded-full w-7 h-7" />
                </div>
              </Menu.Button>
              <Menu.Items className={"relative"}>
                <Menu.Item>
                  <Link
                    className={ActiveLink("")}
                    to="/"
                    onClick={toggleItem}
                    role="menuitem"
                    id="menu-item"
                  >
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className={ActiveLink("details")}
                    to="/details"
                    onClick={toggleItem}
                    role="menuitem"
                    id="menu-item"
                  >
                    Details
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className={ActiveLink("category")}
                    to="/category"
                    onClick={toggleItem}
                    role="menuitem"
                    id="menu-item"
                  >
                    Category
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className={ActiveLink("my-favorites")}
                    to="/my-favorites"
                    onClick={toggleItem}
                    role="menuitem"
                    id="menu-item"
                  >
                    My Favorites
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className={ActiveLink("profile")}
                    to="/profile"
                    onClick={toggleItem}
                    role="menuitem"
                    id="menu-item"
                  >
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className={ActiveLink("accounts")}
                    to="/accounts"
                    onClick={toggleItem}
                    role="menuitem"
                    id="menu-item"
                  >
                    Log in/Sign Up
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Menu>
            {/* </div> */}

            {/* <Select name="status"> */}

            {/* <Menu>
              <Menu.Button
                type="button"
                className="uppercase inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-gray-50 px-3 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => {
                  setCollapsed((collapsed) => !collapsed);
                }}
              >
                <div className="inline-flex items-center font-sans">
                  Menu
                  <PiCaretDownBold className="text-orange ml-12 hover:text-orange-light rounded-full w-7 h-7" />
                </div>
              </Menu.Button>
              <Menu.Items
                className={`${
                  collapsed ? "hidden" : "md:block"
                } absolute left-0 z-10 mt-2 w-36 origin-top-right rounded-lg bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                {links.map((link) => (
                  <Menu.Item role="menuitem" key={link.id} as={Fragment}>
                    {({ active }) => (
                      <Link
                        to={link.href}
                        id={link.id}
                        // onClick={toggleItem}
                        className={`${
                          active
                            ? "bg-gray-200 text-orange"
                            : "bg-gray-100 text-black"
                        }text-gray-600 hover:bg-gray-200 hover:text-orange font-serif block px-4 py-2 text-sm`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu> */}
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
