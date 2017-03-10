export const updateQueryStringParam = (key, value, push = true) => {
  const baseUrl = `${location.protocol}//${location.host}${location.pathname}`;
  const urlQueryString = document.location.search;
  const newParam = `${key}=${value}`;
  let params = `?${newParam}`;

  // If the "search" string exists, then build params from it
  if (urlQueryString) {
    const keyRegex = new RegExp(`([?&])${key}[^&]*`);
    // If param exists already, update it
    if (urlQueryString.match(keyRegex) !== null) {
      params = urlQueryString.replace(keyRegex, `$1${newParam}`);
    } else { // Otherwise, add it to end of query string
      params = `${urlQueryString}&${newParam}`;
    }
  }
  if (push) {
    window.history.pushState({}, '', baseUrl + params);
  } else {
    window.history.replaceState({}, '', baseUrl + params);
  }
};
