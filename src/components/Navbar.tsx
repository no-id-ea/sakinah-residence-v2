import { navigations } from "@/constants";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full backdrop-blur-3xl">
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
              className="pr-[32px] font-lato font-medium text-[24px] hover:font-bold duration-150 transition-all text-snow ease-in-out"
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
