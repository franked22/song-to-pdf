import { NextResponse } from "next/server";
import { backendAuthHeaders, getBackendUrl } from "../../_lib/backend";

/**
 * DELETE — Clean up a project (proxy to backend).
 * SONIC_API_KEY is read from the server env and is never sent to the client bundle.
 */
export async function DELETE(
  _request: Request,
  context: { params: Promise<{ projectId: string }> }
) {
  try {
    const { projectId } = await context.params;

    const res = await fetch(
      `${getBackendUrl()}/api/project/${encodeURIComponent(projectId)}`,
      {
        method: "DELETE",
        headers: backendAuthHeaders(),
      }
    );

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Backend unavailable" }, { status: 502 });
  }
}
