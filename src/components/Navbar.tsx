import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

import { navigations } from "@/constants";
import { NavbarProps } from "@/types";


const Navbar = ({ activeNav }: NavbarProps) => {
  return (
    <header className="flex items-center justify-center w-full backdrop-blur-3xl bg-snow-3">
      <nav className="flex flex-row items-center justify-between w-full max-w-[1440px] px-10">
        <Link href={"/"}>
          <Image
            src="/logo-sakinah.png"
            width={100}
            height={100}
            alt="Logo Sakinah"
            className="object-contain"
          />
        </Link>

        <div className="flex flex-row space-x-2">
          {navigations.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}
              className="pr-[32px] font-lato font-medium text-[24px] group text-shadow"
            >
              <span className={`transition-all duration-150 ease-in  ${activeNav === nav.path ? "font-semibold border-b-2 border-b-shadow" : "group-hover:border-b-2 group-hover:border-b-shadow"}`}>
                {nav.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
