import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import type { Post } from "../models/Post.ts";

export const handler: Handlers<Post[]> = {
  async GET(_, ctx) {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10",
    );
    const posts = await res.json();
    return ctx.render(posts);
  },
};

export default function Home({ data }: PageProps<Post[]>) {
  return (
    <Layout>
      <Head>
        <title>Fresh Posts</title>
      </Head>
      <main class="max-w-lg mx-auto py-4">
        <h1 class="text-2xl">Posts</h1>
        <div class="flex flex-col space-y-2 mt-2">
          {data.map((post) => (
            <>
              <a
                href={post.id.toString()}
                class="font-bold text-xl text-blue-600 hover:underline"
              >
                <h2>{post.title}</h2>
              </a>
            </>
          ))}
        </div>
      </main>
    </Layout>
  );
}
