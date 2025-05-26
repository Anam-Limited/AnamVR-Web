// app/api/send-demo/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const resend = new Resend("re_hLJDvSti_BTiCbNeoTyUX98beqjF2d57k");

    await resend.emails.send({
      from: "ishaan@anamvr.com",
      to: [body.email],
      subject: "Demo Request Received",
      html: `<p>Hello ${body.firstName}, we got your request!</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { success: false, error: "Email failed to send." },
      { status: 500 }
    );
  }
}
