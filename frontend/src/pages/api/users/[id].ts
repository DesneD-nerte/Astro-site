import type { Params } from "astro";
import { getCookieFetchResponse } from "../../../utils/fetch";

export async function post({ params, request }: { params: Params; request: Request }) {
    const id = params;
    const body = await request.json();

    return await getCookieFetchResponse(request, `http://localhost:1337/api/users/${id}`, {
        method: "",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Cart: {
                products: {
                    id: body,
                },
            },
        }),
    });
}

export async function put({ params, request }: { params: Params; request: Request }) {
    const { id } = params;
    const body = await request.json();

    return await getCookieFetchResponse(request, `http://localhost:1337/api/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
}
