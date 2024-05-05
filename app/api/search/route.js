import data from "@/data";
import { NextResponse } from "next/server";

export function GET(req) {
  const q = new URL(req.url).searchParams.get("q");
  const payload = data[decodeURIComponent(q)];
  return NextResponse.json(
    payload
      ? payload
      : {
          data: [],
          total: 0,
          next: "not found",
        }
  );
}
