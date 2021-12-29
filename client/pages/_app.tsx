import type { AppProps } from "next/app";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/react";
import { SWRConfig } from "swr";
import fetcher from "../lib/fetcher";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GeistProvider themeType="light">
        <CssBaseline />
        <SWRConfig value={{ fetcher }}>
          <Page>
            <Page.Content>
              <Component {...pageProps} />
            </Page.Content>
          </Page>
        </SWRConfig>
      </GeistProvider>
    </>
  );
}
