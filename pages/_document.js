import SalimovHead from "@/src/SalimovHead";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SalimovHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
