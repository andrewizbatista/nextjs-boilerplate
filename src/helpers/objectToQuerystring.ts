/**
 * Convert an object to a query string.
 */

const objectToQueryString = (
  params: Record<string, string | number | boolean>,
): string => {
  return Object.keys(params)
    .map((key: string) => `${key}=${params[key]}`)
    .join('&');
};

export default objectToQueryString;
