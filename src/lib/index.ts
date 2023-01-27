export async function fetchTest() {
  return fetch('http://localhost:3000/api/test')
    .then((res) => res.json())
    .then((res) => res.body as string);
}

export const wait = (delay: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve, delay);
  });
