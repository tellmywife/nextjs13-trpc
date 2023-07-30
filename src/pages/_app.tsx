import { type AppType, type AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { AxiomWebVitals } from "next-axiom";
import { HighlightInit } from "@highlight-run/next/highlight-init";
import { api } from "~/utils/api";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AxiomWebVitals />
      <HighlightInit
        projectId={"mem8x9g2"}
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
      />
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
