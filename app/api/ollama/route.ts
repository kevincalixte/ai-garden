import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { prompt } = await request.json();
    const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "mistral", prompt })
    });
        const response = (await res.text())
            .split("\n")
            .map(l => { try { return JSON.parse(l).response || ""; } catch { return ""; } })
            .join("");
        return NextResponse.json({ response });
}