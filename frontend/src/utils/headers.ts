export function getCookie(request: any, name: string) {
  let matches = request.headers
    .get("cookie")
    .match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function checkAuthorization(authorizationCookie: string | undefined) {
  if (!authorizationCookie) {
    return new Response(JSON.stringify({ message: "Not authorized" }), {
      status: 403,
    });
  }
}
