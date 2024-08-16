import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Decise helps clients get the most out of technology with tailored strategies, award-winning software engineering, data analytics, and cyber security services. We solve the toughest business challenges." />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add any additional meta tags or links here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}