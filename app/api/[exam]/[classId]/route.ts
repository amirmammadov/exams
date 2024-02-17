import { NextRequest, NextResponse } from "next/server";

import {
  foundationTwo,
  foundationThree,
  foundationFour,
} from "@/data/examCategories";

export async function GET(
  request: Request,
  { params }: { params: { exam: string; classId: string } }
) {
  const classType = params.classId;
  const examType = params.exam;

  if (examType !== "foundation") {
    return NextResponse.json({ message: "There is no result!", status: 400 });
  }

  try {
    if (classType === "two") {
      return NextResponse.json({ result: foundationTwo });
    } else if (classType === "three") {
      return NextResponse.json({ result: foundationThree });
    } else if (classType === "four") {
      return NextResponse.json({ result: foundationFour });
    } else {
      return NextResponse.json({ message: "There is no result!", status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
