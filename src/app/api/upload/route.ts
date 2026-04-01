import { NextResponse } from "next/server";

// POST /api/upload — accept audio file, return project stub
// In a real app this would save to cloud storage and kick off a transcription job.
// For the demo we just validate and return a mock project ID.

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const allowedTypes = ["audio/wav", "audio/x-wav", "audio/mpeg", "audio/mp3", "audio/flac", "audio/aiff", "audio/x-aiff"];
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    const allowedExts = ["wav", "mp3", "flac", "aiff", "aif"];

    if (!allowedTypes.includes(file.type) && !allowedExts.includes(ext)) {
      return NextResponse.json({ error: "Unsupported audio format" }, { status: 415 });
    }

    if (file.size > 500 * 1024 * 1024) {
      return NextResponse.json({ error: "File exceeds 500MB limit" }, { status: 413 });
    }

    // Generate mock project
    const projectId = `proj-${Date.now()}`;

    return NextResponse.json({
      projectId,
      filename: file.name,
      size: file.size,
      status: "queued",
    });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
