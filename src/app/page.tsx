import { Suspense } from 'react';

import Comments from '@/components/Comments';
import classes from './page.module.css';

const fetchDescription = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Product information ready for SEO');
    }, 100);
  });

const Home = async () => {
  const description = await fetchDescription();

  return (
    <div className={classes.container}>
      <header className={classes.header}>header</header>
      <main className={classes.main}>
        <h2>Product description</h2>
        <p>{description}</p>
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Async Server Component */}
          <Comments />
        </Suspense>
      </main>
      <footer className={classes.footer}>footer</footer>
    </div>
  );
};

export default Home;
