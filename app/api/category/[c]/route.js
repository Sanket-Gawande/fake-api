import data from "@/data";
import { NextResponse } from "next/server";

export function GET(_, { params }) {
  const c = params.c;
  const payload = data.category[decodeURIComponent(c)];
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
