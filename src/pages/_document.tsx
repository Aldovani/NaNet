import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta name="author" content="Aldovani Henrique da Costa" />
        <meta
          name="keywords"
          content="APIS, cores, fontes, imagens e ilustrações, bibliotecas front-end"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
