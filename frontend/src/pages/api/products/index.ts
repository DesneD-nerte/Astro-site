import type { APIRoute } from "astro";
import { checkAuthToken, getCookie } from "../../../utils/headers";

export const get: APIRoute = async ({ params, request }: any) => {
  const authorizationCookie = getCookie(
    request.headers.get("cookie"),
    "Authorization"
  );

  if (!authorizationCookie) {
    return new Response(JSON.stringify({ message: "Not authorized" }), {
      status: 403,
    });
  }
  console.log(123);
  const getAllProductsURL = "http://localhost:1337/api/products?populate=*";

  const productsResponse = await fetch(getAllProductsURL, {
    method: "GET",
    headers: {
      Authorization: authorizationCookie,
    },
  });

  const productsData = await productsResponse.json();

  return new Response(JSON.stringify(productsData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
  // return {
  //   body: JSON.stringify({
  //     message: "This is a get request!",
  //   }),
  // };
};

export async function post({ params, request }: any) {
  const authorizationCookie = getCookie(
    request.headers.get("cookie"),
    "Authorization"
  );

  if (!authorizationCookie) {
    return new Response(JSON.stringify({ message: "Not authorized" }), {
      status: 403,
    });
  }

  const createNewProductURL = "http://localhost:1337/api/products";

  const productResponse = await fetch(createNewProductURL, {
    method: "POST",
    headers: {
      Authorization: authorizationCookie,
    },
  });

  const newProductData = await productResponse.json();

  return new Response(JSON.stringify(newProductData), { status: 200 });
}
