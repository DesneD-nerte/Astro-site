import type { Params } from "astro";
import { getFetchResponse } from "../../../utils/fetch";

export async function get({ params, request }: { params: Params; request: Request }) {
  const id = params.id;

  return await getFetchResponse(request, `http://localhost:1337/api/products/${id}?populate=*`, {
    method: "GET",
  });
}

export async function put({ params, request }: { params: Params; request: Request }) {
  const id = params.id;
  const body = await request.json();

  return await getFetchResponse(request, `http://localhost:1337/api/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: body,
    }),
  });
}

export async function del({ params, request }: { params: Params; request: Request }) {
  const id = params.id;
  console.log(params);
  return await getFetchResponse(request, `http://localhost:1337/api/products/${id}`, {
    method: "DELETE",
  });
}
