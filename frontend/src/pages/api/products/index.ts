import type { APIRoute, Params } from "astro";
import { getCookieFetchResponse } from "../../../utils/fetch";

export const get: APIRoute = async ({ params, request }: { params: Params; request: Request }) => {
  return await getCookieFetchResponse(request, `http://localhost:1337/api/products?populate=*`, {
    method: "GET",
  });
};

export async function post({ params, request }: { params: Params; request: Request }) {
  const body = await request.json();

  return await getCookieFetchResponse(request, `http://localhost:1337/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: body,
    }),
  });
}
