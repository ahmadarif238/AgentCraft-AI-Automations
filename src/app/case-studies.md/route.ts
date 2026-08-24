import { markdownResponse } from "@/lib/markdownMirror";

/** Plain-markdown mirror of /case-studies. See src/lib/markdownMirror.ts. */
export const dynamic = "force-static";

export function GET() {
  return markdownResponse("case-studies");
}
