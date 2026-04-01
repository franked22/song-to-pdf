import { NextResponse } from "next/server";

// POST /api/transcribe — start a transcription job
// GET  /api/transcribe?jobId=xxx — poll job status

const jobs = new Map<string, { progress: number; stage: string; status: string }>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { projectId } = body;

    if (!projectId) {
      return NextResponse.json({ error: "projectId required" }, { status: 400 });
    }

    const jobId = `job-${Date.now()}`;
    jobs.set(jobId, {
      progress: 0,
      stage: "queued",
      status: "processing",
    });

    // Simulate async progress
    const stages = [
      { progress: 15, stage: "separating_stems" },
      { progress: 40, stage: "detecting_pitch" },
      { progress: 65, stage: "generating_notation" },
      { progress: 85, stage: "building_lead_sheet" },
      { progress: 100, stage: "complete" },
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i >= stages.length) {
        clearInterval(interval);
        return;
      }
      const s = stages[i];
      jobs.set(jobId, {
        progress: s.progress,
        stage: s.stage,
        status: s.stage === "complete" ? "complete" : "processing",
      });
      i++;
    }, 2000);

    return NextResponse.json({ jobId, projectId, status: "processing" });
  } catch {
    return NextResponse.json({ error: "Failed to start transcription" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const jobId = searchParams.get("jobId");

  if (!jobId || !jobs.has(jobId)) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  return NextResponse.json({ jobId, ...jobs.get(jobId) });
}
