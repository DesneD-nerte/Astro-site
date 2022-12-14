import { checkAuthorization, getCookie } from "./headers";

export async function getCookieFetchResponse(request: Request, url: string, init?: RequestInit) {
    const cookies = request.headers.get("cookie") as string;
    const authorizationCookie = getCookie(cookies, "Authorization");

    const notAuthResponse = checkAuthorization(authorizationCookie);
    if (notAuthResponse) {
        return notAuthResponse;
    }

    return getFetchResponse(url, {
        method: init?.method,
        headers: {
            ...init?.headers,
            Authorization: authorizationCookie as string,
        },
        body: init?.body,
    });
}

export async function getFetchResponse(url: string, init?: RequestInit) {
    const entityResponse = await fetch(url, init);
    const entityData = await entityResponse.json();

    if (entityResponse.status == 200) {
        return new Response(JSON.stringify(entityData), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } else {
        return new Response(JSON.stringify(entityData), {
            status: entityResponse.status,
        });
    }
}
