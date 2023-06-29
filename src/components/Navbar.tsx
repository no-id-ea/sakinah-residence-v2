import { navigations } from "@/constants";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="absolute flex top-0 z-10 items-center justify-between w-full max-w-[1440px]">
      <nav>
        <Link href={"/"}>
          <Image
            src="/logo-sakinah.png"
            width={100}
            height={100}
            alt="Logo Sakinah"
            className="object-contain"
          />
        </Link>
      </nav>
      <nav className="flex flex-row items-center justify-between">
        {navigations.map((nav) => (
          <Link
            key={nav.name}
            href={nav.path}
            className="pr-[32px] font-lato font-medium text-[24px] hover:font-bold duration-75 text-snow ease-in-out"
          >
            {nav.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
