import { NextResponse } from "next/server";
import { backendAuthHeaders, getBackendUrl } from "../_lib/backend";

/**
 * GET — Fetch completed transcription result (proxy to backend)
 * SONIC_API_KEY is read from the server env and is never sent to the client bundle.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get("projectId");

    if (!projectId) {
      return NextResponse.json({ error: "projectId required" }, { status: 400 });
    }

    const res = await fetch(
      `${getBackendUrl()}/api/result/${encodeURIComponent(projectId)}`,
      { headers: backendAuthHeaders() }
    );
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { error: "Backend unavailable" },
      { status: 502 }
    );
  }
}
