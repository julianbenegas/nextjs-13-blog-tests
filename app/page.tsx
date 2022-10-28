import Head from "next/head";
import Link from "next/link";
import { fetchPosts } from "../common/fetch-posts";
import styles from "./home.module.css";

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js 13 Blog</h1>
        <ul>
          {posts.map((p) => {
            return (
              <li key={p.id}>
                <Link href={`/${p.slug}`}>{p.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
