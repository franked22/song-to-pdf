import { NextResponse } from "next/server";
import { backendAuthHeaders, getBackendUrl } from "../../_lib/backend";

/**
 * Proxy file downloads so the browser never needs SONIC_API_KEY.
 */
export async function GET(
  _request: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await context.params;
    const suffix = path.map(encodeURIComponent).join("/");

    const res = await fetch(`${getBackendUrl()}/api/files/${suffix}`, {
      headers: backendAuthHeaders(),
    });

    if (!res.ok) {
      const text = await res.text();
      return new NextResponse(text || "Not found", { status: res.status });
    }

    const contentType = res.headers.get("content-type") || "application/octet-stream";
    const body = await res.arrayBuffer();
    return new NextResponse(body, {
      status: res.status,
      headers: { "Content-Type": contentType },
    });
  } catch {
    return NextResponse.json({ error: "Backend unavailable" }, { status: 502 });
  }
}
