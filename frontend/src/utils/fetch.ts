import { checkAuthorization, getCookie } from "./headers";

export async function getFetchResponse(request: any, url: string, init?: RequestInit) {
  const authorizationCookie = getCookie(request, "Authorization");

  const notAuthResponse = checkAuthorization(authorizationCookie);
  if (notAuthResponse) {
    return notAuthResponse;
  }

  return entityResponse(url, {
    method: init?.method,
    headers: {
      ...init?.headers,
      Authorization: authorizationCookie as string,
    },
    body: init?.body,
  });
}

async function entityResponse(url: string, init?: RequestInit) {
  const entityResponse = await fetch(url, init);

  const entityData = await entityResponse.json();

  return new Response(JSON.stringify(entityData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
