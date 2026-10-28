"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "sentrarisk_cookie_consent";

function hasAnalyticsConsent() {
  if (typeof window === "undefined") {
    return false;
  }
  return window.localStorage.getItem(CONSENT_KEY) === "accepted";
}

function loadAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", "G-VS527Y2NFS");

  if (!document.getElementById("google-analytics-loader")) {
    const analytics = document.createElement("script");
    analytics.id = "google-analytics-loader";
    analytics.async = true;
    analytics.src = "https://www.googletagmanager.com/gtag/js?id=G-VS527Y2NFS";
    document.head.appendChild(analytics);
  }
}

export function TrackingScripts() {
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      loadAnalytics();
    }

    function handleConsentChange() {
      if (hasAnalyticsConsent()) {
        loadAnalytics();
      }
    }

    window.addEventListener("sentrarisk-cookie-consent", handleConsentChange);
    return () => window.removeEventListener("sentrarisk-cookie-consent", handleConsentChange);
  }, []);

  return null;
}
