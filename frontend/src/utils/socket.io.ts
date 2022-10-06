import { io } from "socket.io-client";
import { getCookie } from "../utils/headers";

const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_API_URL;
const authCookie = getCookie(document.cookie, "Authorization");

const socket = io(STRAPI_URL, {
    auth: {
        Authorization: authCookie,
    },
});

socket.on("connect", () => {
    console.log("connect");
});

export function addListener(eventName: string, callback: any) {
    socket.on("connect", () => {
        socket.on(eventName, callback);
    });
}
