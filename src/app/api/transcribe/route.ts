import { NextResponse } from "next/server";
import { backendAuthHeaders, getBackendUrl } from "../_lib/backend";

/**
 * POST — Start a transcription job (proxy to backend)
 * GET — Poll job status (proxy to backend)
 * SONIC_API_KEY is read from the server env and is never sent to the client bundle.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch(`${getBackendUrl()}/api/transcribe`, {
      method: "POST",
      headers: backendAuthHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { error: "Backend unavailable" },
      { status: 502 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get("jobId");

    if (!jobId) {
      return NextResponse.json({ error: "jobId required" }, { status: 400 });
    }

    const res = await fetch(`${getBackendUrl()}/api/job/${encodeURIComponent(jobId)}`, {
      headers: backendAuthHeaders(),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { error: "Backend unavailable" },
      { status: 502 }
    );
  }
}
