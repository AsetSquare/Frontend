export function shortenString(str: string) {
  if (typeof str !== "string") {
    throw new Error("str must be a string");
  }
  if (str.length <= 11) {
    return str;
  }
  return `${str.slice(0, 5)}....${str.slice(-5)}`;
}
