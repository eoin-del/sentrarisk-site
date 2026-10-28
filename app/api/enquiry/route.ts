import { NextResponse } from "next/server";

const APP_API_BASE = process.env.APP_API_BASE || "https://app.sentrarisksystems.com/api";

function clean(value: unknown) {
  return String(value || "").trim();
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid enquiry details." }, { status: 400 });
  }

  const payload = {
    name: clean((body as Record<string, unknown>).name),
    email: clean((body as Record<string, unknown>).email),
    company: clean((body as Record<string, unknown>).company),
    role: clean((body as Record<string, unknown>).role),
    organization_size: clean((body as Record<string, unknown>).organization_size),
    main_interest: clean((body as Record<string, unknown>).main_interest),
    message: clean((body as Record<string, unknown>).message),
    source: "Marketing website contact form",
  };

  if (!payload.name || !payload.email || !payload.company) {
    return NextResponse.json({ ok: false, error: "Please add your name, email, and company." }, { status: 400 });
  }

  const response = await fetch(`${APP_API_BASE}/public/enquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  }).catch(() => null);

  if (!response?.ok) {
    const error = await response?.json().catch(() => null);
    return NextResponse.json(
      { ok: false, error: error?.detail || "The enquiry could not be sent. Please email support@sentrarisksystems.com." },
      { status: response?.status || 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
