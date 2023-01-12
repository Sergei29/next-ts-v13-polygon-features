import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { id: 1, path: "/", name: "Homepage" },
  { id: 2, path: "/other", name: "Other" },
];

const getLinkClasname = (isActive: boolean) =>
  isActive
    ? "text-purple-800 font-semibold underline"
    : "text-gray-800 font-semibold";

const Navigation = (): JSX.Element => {
  const { pathname } = useRouter();
  return (
    <nav>
      <ul className="list-none flex justify-center gap-2">
        {navLinks.map(({ id, path, name }) => (
          <Link
            key={id}
            href={path}
            className={getLinkClasname(pathname === path)}
          >
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
