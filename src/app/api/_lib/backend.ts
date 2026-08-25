/**
 * Server-only backend helpers.
 * SONIC_API_KEY must never be prefixed with NEXT_PUBLIC_ or imported from a Client Component.
 */

export function getBackendUrl(): string {
  return (
    process.env.BACKEND_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8000"
  );
}

export function backendAuthHeaders(init?: HeadersInit): Headers {
  const headers = new Headers(init);
  const key = process.env.SONIC_API_KEY;
  if (key) {
    headers.set("Authorization", `Bearer ${key}`);
  }
  return headers;
}
