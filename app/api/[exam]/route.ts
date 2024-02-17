import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { exam: string } }
) {
  const examId = params.exam;

  try {
    return NextResponse.json({ message: "There is no result!", status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
