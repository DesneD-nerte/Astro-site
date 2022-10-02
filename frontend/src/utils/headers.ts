export function checkAuthToken(authCookies: string) {
  if (getCookie(authCookies, "Authorization")) {
    return true;
  }

  return false;
}

export function getCookie(authCookies: string, name: string) {
  let matches = authCookies.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );

  return matches ? decodeURIComponent(matches[1]) : undefined;
}
