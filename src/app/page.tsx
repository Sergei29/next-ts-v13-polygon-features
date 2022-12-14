import { Suspense } from "react";

import Comments from "@/components/Comments";

const fetchDescription = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Product information ready for SEO");
    }, 100);
  });

const Home = async () => {
  const description = await fetchDescription();

  return (
    <>
      <h2>Product description</h2>
      <p>{description}</p>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Comments />
      </Suspense>
    </>
  );
};

export default Home;
