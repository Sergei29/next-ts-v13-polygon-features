import classes from './page.module.css';

export default function Home() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>header</header>
      <main className={classes.main}>
        <h2>Hi</h2>
      </main>

      <footer className={classes.footer}>footer</footer>
    </div>
  );
}
