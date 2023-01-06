"use client";

import React from "react";
import Link from "next/link";

const navLinks = [{ id: 1, path: "/", name: "Homepage" }];

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <ul className="list-none flex justify-center gap-2">
        {navLinks.map(({ id, path, name }) => (
          <Link key={id} href={path} className="text-gray-800 font-semibold">
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
