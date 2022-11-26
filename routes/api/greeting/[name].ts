import { Handler } from "$fresh/server.ts";

export const handler: Handler = (_, ctx): Response => {
  return new Response(`Hello, ${ctx.params.name}!`);
};
