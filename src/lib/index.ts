export const isServer = () => typeof window === 'undefined';

export async function fetchTest() {
  return fetch('http://localhost:3000/api/test')
    .then((res) => res.json())
    .then((res) => res.body as string);
}

export const wait = (delay: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve, delay);
  });

export const getPosts = async (): Promise<
  {
    id: number;
    title: string;
  }[]
> => {
  const url = isServer() ? 'http://localhost:3000/api/posts' : '/api/posts';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await res.json();
  } catch (error) {
    throw error;
  }
};
