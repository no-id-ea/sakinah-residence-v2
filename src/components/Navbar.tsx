"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenuFill, RiMenuFoldFill } from "react-icons/ri";

import { navigations } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="drawer fixed top-0 z-10 flex items-center justify-center w-full backdrop-blur-3xl bg-snow-3">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <nav className="drawer-content flex flex-row items-center justify-between w-full max-w-[1440px] px-14">
        <Link href={"/"}>
          <Image
            src="/logo-sakinah.png"
            width={100}
            height={100}
            alt="Logo Sakinah"
            className="object-contain"
          />
        </Link>

        <label htmlFor="navbar-drawer" className="flex lg:hidden">
          <RiMenuFill className="text-[50px] text-shadow" />
        </label>

        <div className="flex-row hidden space-x-8 lg:flex">
          {navigations.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}
              className="font-lato font-medium text-[24px] group text-shadow"
            >
              <span
                className={`transition-all duration-150 ease-in  ${
                  pathname === nav.path
                    ? "font-semibold border-b-2 border-b-shadow"
                    : "group-hover:border-b-2 group-hover:border-b-shadow"
                }`}
              >
                {nav.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="drawer-side">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <ul className="flex flex-col space-y-4 p-4 w-44 h-full bg-snow-3">
          {navigations.map((nav, idx) => (
            <li key={idx}>
              <Link
                href={nav.path}
                className="font-lato font-medium text-[24px] group text-shadow"
              >
                <span
                  className={`transition-all duration-150 ease-in  ${
                    pathname === nav.path
                      ? "font-semibold border-b-2 border-b-shadow"
                      : "group-hover:border-b-2 group-hover:border-b-shadow"
                  }`}
                >
                  {nav.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
