import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#2296f3" />
        <meta name="title" content="Digital Studio® - Agencia de desarrollo web,movil y marketing digital" />
        <meta
          name="description"
          content="Agencia de marketing digital y de desarrollo web y movil para todo tipo de empresas pequeñas, medianas o grandes."
        />
        <meta
          name="keywords"
          content="react admin template, material-ui react dashboard template, reactjs admin template, reactjs dashboard, react backend template, marketing digital, marketing web, desarrollo web, desarrollo movil, programacion"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitalstudio.com.co/" />
        <meta property="og:site_name" content="digitalstudio.com.co" />
        <meta property="article:publisher" content="https://www.facebook.com/codedthemes" />
        <meta property="og:title" content="Digital Studio® - Agencia de desarrollo web,movil y marketing digital" />
        <meta
          property="og:description"
          content="Agencia de marketing digital y de desarrollo web y movil para todo tipo de empresas pequeñas, medianas o grandes."
        />
        <meta property="og:image" content="https://digitalstudio.com.co/og-image/og-facebook.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://digitalstudio.com.co" />
        <meta property="twitter:title" content="Digital Studio® - Agencia de desarrollo web,movil y marketing digital" />
        <meta
          property="twitter:description"
          content="Agencia de marketing digital y de desarrollo web y movil para todo tipo de empresas pequeñas, medianas o grandes."
        />
        <meta property="twitter:image" content="https://digitalstudio.com.co/og-image/og-twitter.png" />
        <meta name="twitter:creator" content="@codedthemes" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
