import type { Params } from "astro";
import { getFetchResponse } from "../../../utils/fetch";

const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_API_URL;

export async function post({ params, request }: { params: Params; request: Request }) {
    const body = await request.json();

    return await getFetchResponse(`${STRAPI_URL}/api/auth/local`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
}
