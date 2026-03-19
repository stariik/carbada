import { NextResponse } from "next/server";
import { getAllCards } from "@/lib/db";

export async function GET() {
  try {
    const cards = getAllCards();
    return NextResponse.json({ cards });
  } catch (error) {
    console.error("Error fetching cards:", error);
    return NextResponse.json(
      { error: "ბარათების წამოღება ვერ მოხერხდა" },
      { status: 500 }
    );
  }
}
