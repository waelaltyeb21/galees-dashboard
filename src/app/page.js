import React from "react";
import Link from "next/link";
import Logout from "./login/Logout";

export const Links = [
  {
    id: 1,
    title: "الكتب",
    path: "/books",
  },
  {
    id: 2,
    title: "الاقسام",
    path: "/categories",
  },
  {
    id: 3,
    title: "الاعدادات",
    path: "/settings",
  },
];

const page = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center min-h-[90dvh]">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        {Links.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className="w-full bg-slate-200 text-center  p-4 rounded-lg text-2xl font-semibold hover:text-indigo-600 hover:underline"
          >
            {link.title}
          </Link>
        ))}
      </div>

      <Logout />
    </section>
  );
};

export default page;
