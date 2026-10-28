"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "sentrarisk_cookie_consent";

type ConsentChoice = "accepted" | "essential";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const existing = window.localStorage.getItem(CONSENT_KEY);
      setVisible(!existing);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function choose(choice: ConsentChoice) {
    window.localStorage.setItem(CONSENT_KEY, choice);
    window.dispatchEvent(new Event("sentrarisk-cookie-consent"));
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-4">
      <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-[0_16px_44px_rgba(15,23,42,0.16)] sm:flex sm:items-center sm:justify-between sm:gap-5">
        <div className="max-w-xl">
          <p className="text-xs font-bold text-slate-950">Cookie choices</p>
          <p className="mt-0.5 text-xs leading-5 text-slate-600">
            Essential cookies keep the site working. Analytics are optional. Read our{" "}
            <Link href="/privacy-policy" className="font-semibold text-cyan-700 hover:text-cyan-900">
              Privacy
            </Link>
            {" "}and{" "}
            <Link href="/cookie-policy" className="font-semibold text-cyan-700 hover:text-cyan-900">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-0 sm:min-w-64">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="h-9 rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="h-9 rounded-lg bg-slate-950 px-3 text-xs font-semibold text-white transition hover:bg-cyan-800"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
