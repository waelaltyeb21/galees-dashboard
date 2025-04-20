import { Links } from "@/app/page";
import Link from "next/link";
import React from "react";

const Header = async () => {
  return (
    <header>
      <nav className="fixed w-full p-4 border-b-2 border-slate-300 bg-slate-100">
        <div className="flex justify-center items-center gap-4">
          {Links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className="w-full text-center rounded-lg text-xl font-semibold hover:text-indigo-600 hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
