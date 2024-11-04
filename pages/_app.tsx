import Head from "next/head";
import { AppProps } from "next/app";
import splitbee from "@splitbee/web";
import Header from "../components/header";
import Footer from "../components/footer";
import { appWithTranslation } from "next-i18next";
import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/globals.css";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

// Create a client
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Kevinbkdev Blog - Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.png"></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E1P0FRENZE"
        ></script>
        {/* <script
          data-ad-client="ca-pub-9218747748878734"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9218747748878734"
          crossOrigin="anonymous"
        ></script> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-E1P0FRENZE');
              `,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (
              localStorage.theme === "dark" ||
              (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
            `,
          }}
        ></script>

        {/** Intergration mailchimp */}
        <script id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `
            !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/1756d11b9bc01102df03067a4/16aaa026d1afccbefb6ba023b.js");          `,
        }}
        />

        {/* <script id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `
            injectSpeedInsights()
          `,
          }}
        /> */}

      </Head>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Footer />
      <Analytics />
      {/* <SpeedInsights /> */}
    </div>
  );
}

export default appWithTranslation(App);
