import { getCookie } from "../../utils/headers";

export async function get({ params, request }: any) {
  const authorizationCookie = getCookie(
    request.headers.get("cookie"),
    "Authorization"
  );

  if (!authorizationCookie) {
    return new Response(JSON.stringify({ message: "Not authorized" }), {
      status: 403,
    });
  }

  const id = params.id;

  const getOneProductURL = `http://localhost:1337/api/products/${id}?populate=*`;

  const oneProductResponse = await fetch(getOneProductURL, {
    method: "GET",
    headers: {
      Authorization: authorizationCookie,
    },
  });

  const oneProductData = await oneProductResponse.json();

  return new Response(JSON.stringify(oneProductData), { status: 200 });
}

export async function put({ params, request }: any) {
  const authorizationCookie = getCookie(
    request.headers.get("cookie"),
    "Authorization"
  );

  if (!authorizationCookie) {
    return new Response(JSON.stringify({ message: "Not authorized" }), {
      status: 403,
    });
  }

  const id = params.id;

  const changeOneProductURL = `http://localhost:1337/api/products/${id}`;

  const oneProductResponse = await fetch(changeOneProductURL, {
    method: "PUT",
    headers: {
      Authorization: authorizationCookie,
    },
  });

  const oneProductData = await oneProductResponse.json();

  return new Response(JSON.stringify(oneProductData), { status: 200 });
}

export async function del({ params, request }: any) {
  const authorizationCookie = getCookie(
    request.headers.get("cookie"),
    "Authorization"
  );

  if (!authorizationCookie) {
    return new Response(JSON.stringify({ message: "Not authorized" }), {
      status: 403,
    });
  }

  const id = params.id;

  const deleteOneProductURL = `http://localhost:1337/api/products/${id}`;

  const oneProductResponse = await fetch(deleteOneProductURL, {
    method: "DELETE",
    headers: {
      Authorization: authorizationCookie,
    },
  });

  const oneProductData = await oneProductResponse.json();

  return new Response(JSON.stringify(oneProductData), { status: 200 });
}
