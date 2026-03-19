import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { getCardById, updateCard } from "@/lib/db";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "carbada-secret-key-2024-very-secure"
);

async function verifyAuth(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get("carbada_auth")?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuthed = await verifyAuth(request);
  if (!isAuthed) {
    return NextResponse.json({ error: "არავტორიზებული" }, { status: 401 });
  }

  const { id } = await params;
  const cardId = parseInt(id, 10);

  if (isNaN(cardId)) {
    return NextResponse.json({ error: "არასწორი ID" }, { status: 400 });
  }

  const existingCard = getCardById(cardId);
  if (!existingCard) {
    return NextResponse.json({ error: "ბარათი ვერ მოიძებნა" }, { status: 404 });
  }

  try {
    const body = await request.json();
    const { title, description, button_text, image_path } = body as {
      title?: string;
      description?: string;
      button_text?: string;
      image_path?: string;
    };

    const updates: Record<string, string> = {};
    if (title !== undefined) updates.title = title.trim();
    if (description !== undefined) updates.description = description.trim();
    if (button_text !== undefined) updates.button_text = button_text.trim();
    if (image_path !== undefined) updates.image_path = image_path;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "განახლებადი ველები არ არის" }, { status: 400 });
    }

    if (updates.title !== undefined && updates.title.length === 0) {
      return NextResponse.json({ error: "სათაური ვერ იქნება ცარიელი" }, { status: 400 });
    }

    updateCard(cardId, updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating card:", error);
    return NextResponse.json(
      { error: "ბარათის განახლება ვერ მოხერხდა" },
      { status: 500 }
    );
  }
}
