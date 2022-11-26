import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../models/Post.ts";
import Comments from "../islands/Comments.tsx";
import Layout from "../components/Layout.tsx";

export const handler: Handlers<Post> = {
  async GET(_, ctx) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${ctx.params.postId}`,
    );
    const post = await res.json();
    return ctx.render(post);
  },
};

export default function Greet({ data }: PageProps<Post>) {
  return (
    <Layout>
      <main class="max-w-lg mx-auto py-4">
        <h1 class="text-2xl font-bold">{data.title}</h1>
        <p class="mt-4">{data.body}</p>
        <Comments postId={data.id} />
      </main>
    </Layout>
  );
}
