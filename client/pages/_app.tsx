import type { AppProps } from "next/app";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import { SWRConfig } from "swr";
import fetcher from "../lib/fetcher";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GeistProvider themeType="light">
        <CssBaseline />
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </GeistProvider>
    </>
  );
}
