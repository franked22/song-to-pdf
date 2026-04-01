import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * Proxy upload requests to the Python backend.
 * This allows the frontend to call /api/upload without CORS issues.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const res = await fetch(`${BACKEND_URL}/api/upload`, {
      method: "POST",
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
