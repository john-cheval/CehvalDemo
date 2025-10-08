import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ServerNavbar from "@/components/NewHeader/ServerNavbar";
import ServerFooter from "@/components/Footer/ServerFooter";
// import { Partytown } from "@builder.io/partytown/react";
import ScrollToTop from "@/hooks/useScrollToTop";
import UnloadWarning from "@/components/shared/UnloadWarning";
import HydrationDebug from "@/components/HydrationDebug";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // suppressHydrationWarning={true}
      className="notranslate light"
      translate="no"
    >
      <head>
        {/* <Partytown
          debug={process.env.NODE_ENV === "development"}
          forward={["dataLayer.push"]}
        /> */}
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chevalme" />
        <meta name="color-scheme" content="light" />
        <meta
          name="google-site-verification"
          content="YbB6z89M0yPuoamiqG8bPFz3wMP1p5QRhXO8ni6oxXk"
        />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://snap.licdn.com" />
        <link
          rel="preconnect"
          href="https://bunny-wp-pullzone-1uo9uvm3si.b-cdn.net"
        />

        <link
          rel="preload"
          href="/Cheval.svg"
          as="image"
          type="image/svg+xml"
          // fetchPriority="high"
        />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Satoshi-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${sora.variable} flex flex-col min-h-screen antialiased`}
      >
        <ServerNavbar />

        <main className="flex-grow-1">
          {" "}
          <UnloadWarning enabled={true} />
          <ScrollToTop />
          {children}
          <HydrationDebug />
        </main>

        <ServerFooter />

        {/* Google Tag Manager (noscript) - single implementation */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMNRTFC2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* LinkedIn Insight Tag (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=6408778&fmt=gif"
          />
        </noscript>

        {/* Single Google Tag Manager implementation */}
        <Script id="google-tag-manager" strategy="lazyOnload" /* partytown */>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.defer=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMNRTFC2');
          `}
        </Script>

        {/* Consolidated Analytics Scripts - afterInteractive ensures they don't block rendering */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E4N6B3LXG2"
          strategy="lazyOnload"
        />

        {/* Consolidated Google Analytics */}
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11182646972');
            gtag('config', 'AW-11319129226');
            gtag('config', 'G-E4N6B3LXG2');
          `}
        </Script>

        <Script id="linkedin-insight" strategy="lazyOnload" /* partytown */>
          {`
            _linkedin_partner_id = "6408778";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);

            (function(l) {
              if (!l){
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>

        {/* Form tracking */}
        <Script id="form-tracking" strategy="lazyOnload" /* partytown */>
          {`
            document.addEventListener("wpcf7mailsent", function(event) {
              window.location = "https://chevalme.com/thank-you/";
              window.dataLayer.push({
                event: "send_form",
                formId: event.detail.contactFormId,
                response: event.detail.inputs,
              });
            });
          `}
        </Script>
        <Script
          src="https://cloudflare-static/email-decode.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
