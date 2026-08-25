import { NextResponse } from "next/server";
import { backendAuthHeaders, getBackendUrl } from "../_lib/backend";

/**
 * Proxy upload requests to the Python backend.
 * This allows the frontend to call /api/upload without CORS issues.
 * SONIC_API_KEY is read from the server env and is never sent to the client bundle.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const res = await fetch(`${getBackendUrl()}/api/upload`, {
      method: "POST",
      headers: backendAuthHeaders(),
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Backend unavailable. Make sure the transcription server is running." },
      { status: 502 }
    );
  }
}
