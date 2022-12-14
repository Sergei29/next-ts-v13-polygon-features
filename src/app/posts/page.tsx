import React, { use } from "react";
import Head from "next/head";

import { NEXT_PUBLIC_JSONPLACEHOLDER_API } from "@/constants";

const DEFAULT_ERROR_MSG = "Falied to fetch posts";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async (): Promise<{
  data: Post[] | null;
  error: null | string;
}> => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_JSONPLACEHOLDER_API}/posts`);
    if (!res.ok) {
      throw new Error(DEFAULT_ERROR_MSG);
    }
    const data = (await res.json()) as Post[];
    return { data, error: null };
  } catch (error) {
    const msg = error instanceof Error ? error.message : DEFAULT_ERROR_MSG;
    return { data: null, error: msg };
  }
};

const PostsPage = () => {
  const posts = use(getPosts());

  return (
    <>
      <Head>
        <title>Posts Page</title>
        <meta
          name="description"
          content="Posts list
         page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Posts Page</h1>
      <ul>
        {posts.data &&
          posts.data.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
};

export default PostsPage;
