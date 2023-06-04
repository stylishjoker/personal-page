import "../style/global.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <Layout>
      <AnyComponent {...pageProps} />
    </Layout>
  );
}
