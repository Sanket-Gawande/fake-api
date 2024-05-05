import { NextResponse } from "next/server";

export function GET() {
  const payload = [
    "Pop",
    "Rock",
    "Hip-Hop",
    "R&B",
    "India",
    "Electronic",
    "90s Hindi",
    "Jazz",
  ];
  return NextResponse.json(payload);
}
