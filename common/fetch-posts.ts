import slugify from "slugify";

export async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return (
    (await res.json()) as Array<{
      id: number;
      userId: number;
      title: string;
      body: string;
    }>
  )
    .slice(0, 500)
    .map((p) => ({
      ...p,
      slug: slugify(p.title, { lower: true, strict: true }),
    }));
}
