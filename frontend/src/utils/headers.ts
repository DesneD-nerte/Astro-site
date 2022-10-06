export function getCookie(cookie: string | null, name: any) {
    let matches = cookie?.match(
        new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
    );

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

interface keyable {
    [key: string]: any;
}

export function setCookie(name: string, value: string, options: keyable = {}) {
    options = {
        path: "/",
        ...options,
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];

        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
    setCookie(name, "", {
        "max-age": -1,
    });
}

export function checkAuthorization(authorizationCookie: string | undefined) {
    if (!authorizationCookie) {
        return new Response(JSON.stringify({ message: "Not authorized" }), {
            status: 403,
        });
    }
}
