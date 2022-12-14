import React from "react";
import Link from "next/link";

import classes from "./Navigation.module.css";

interface IProps {
  [x: string]: any;
}

const Navigation = ({}: IProps): JSX.Element => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <li>
          <Link href="/">Homepage </Link>
        </li>
        <li>
          <Link href="/posts">Posts </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
