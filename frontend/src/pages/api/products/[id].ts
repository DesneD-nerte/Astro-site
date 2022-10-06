import type { Params } from "astro";
import { getCookieFetchResponse } from "../../../utils/fetch";

const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_API_URL;

export async function get({ params, request }: { params: Params; request: Request }) {
    const id = params.id;

    return await getCookieFetchResponse(request, `${STRAPI_URL}/api/products/${id}?populate=*`, {
        method: "GET",
    });
}

export async function put({ params, request }: { params: Params; request: Request }) {
    const id = params.id;
    const body = await request.json();

    return await getCookieFetchResponse(request, `${STRAPI_URL}/api/products/${id}?populate=*`, {
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

    return await getCookieFetchResponse(request, `${STRAPI_URL}/api/products/${id}`, {
        method: "DELETE",
    });
}
