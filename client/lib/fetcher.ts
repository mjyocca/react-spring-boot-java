export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const API = process.env.API ?? "";
  const res = await fetch(`${API}${input}`, init);
  return res.json();
}
