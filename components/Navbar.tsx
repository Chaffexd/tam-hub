import { fetchNavbar } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const navData = await fetchNavbar();

  const { navigationItems } = navData.fields;
  return (
    <nav className="w-full border-b border-slate-200">
      <ul className="flex items-center justify-between px-4">
        <Link href={"/"}>
          <Image
            src={`https:${navigationItems[0].fields.image.fields.file.url}`}
            alt="Contentful Logo"
            height={75}
            width={75}
          />
        </Link>
        <div className="flex">
          {navigationItems.slice(1).map((navItem) => (
            <li key={navItem.sys.id} className="ml-4">
              <Link
                href={navItem.fields.slug}
                className="border-l border-slate-200 pl-4 hover:underline"
              >
                {navItem.fields.navItem}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
