export function makeHttpRequest(url: any, params: any) {
  const queryParams = new URLSearchParams(params);
  const fullUrl = `${url}?${queryParams}`;

  return fetch(fullUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error! Status: ${response.status} - ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}
