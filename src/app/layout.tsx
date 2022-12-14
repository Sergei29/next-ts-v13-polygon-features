import { Oswald } from "@next/font/google";
import Navigation from "@/components/Navigation";

import classes from "./layout.module.css";
import "./globals.css";

const oswaldFont = Oswald();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={classes.container}>
        <div className={oswaldFont.className}>
          <header className={classes.header}>
            <Navigation />
          </header>
          <main className={classes.main}>{children}</main>
          <footer className={classes.footer}>footer</footer>
        </div>
      </body>
    </html>
  );
}
