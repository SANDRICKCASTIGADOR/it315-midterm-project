import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await fetch("https://it315-api-key-v2-637z.vercel.app/api/keys", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return Response.json(data);
    
  } catch (error) {
    console.error("Proxy fetch error:", error);
    return Response.json(
      { error: "Failed to fetch from external API" },
      { status: 500 }
    );
  }
}