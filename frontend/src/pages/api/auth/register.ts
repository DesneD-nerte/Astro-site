import type { Params } from "astro";
import { getFetchResponse } from "../../../utils/fetch";

export async function post({ params, request }: { params: Params; request: Request }) {
  const body = await request.json();

  return await getFetchResponse(`http://localhost:1337/api/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
