import { NextResponse } from "next/server";
import { getDashboardData } from "@/lib/obsidian";

export async function GET() {
  const data = getDashboardData(true);
  return NextResponse.json(data);
}
