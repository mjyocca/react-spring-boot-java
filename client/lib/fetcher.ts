export default async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
    const DOMAIN = process.env.DOMAIN ?? '';
    const res = await fetch(`${DOMAIN}${input}`, init);
    return res.json();
  }