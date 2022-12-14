import React from "react";
import Link from "next/link";

import classes from "./Navigation.module.css";

const navLinks = [
  { id: 1, path: "/", name: "Homepage" },
  { id: 2, path: "/posts", name: "Posts" },
  { id: 3, path: "/pokemons", name: "Pokemons" },
];
interface IProps {
  [x: string]: any;
}

const Navigation = ({}: IProps): JSX.Element => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        {navLinks.map(({ id, path, name }) => (
          <li key={id}>
            <Link href={path}>{name} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
