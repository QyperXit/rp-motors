"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * @typedef {(command: string, target?: string | Date, options?: Record<string, unknown>) => void} Gtag
 */

/**
 * @typedef {Window & {
   *   dataLayer?: unknown[];
   *   gtag?: Gtag;
 * }} AnalyticsWindow
 */

/**
 * @returns {AnalyticsWindow}
 */
function getAnalyticsWindow() {
  return /** @type {AnalyticsWindow} */ (window);
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    let timeoutId;

    const sendPageView = () => {
      const analyticsWindow = getAnalyticsWindow();

      if (typeof analyticsWindow.gtag !== "function") {
        timeoutId = window.setTimeout(sendPageView, 100);
        return;
      }

      const pagePath = search ? `${pathname}?${search}` : pathname;

      analyticsWindow.gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: pagePath,
        page_title: document.title,
        send_to: GA_ID,
      });
    };

    sendPageView();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [pathname, search]);

  return null;
}

export default function GoogleAnalytics() {
  if (!GA_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="google-analytics-consent"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', '${GA_ID}', { send_page_view: false });
          `,
        }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
