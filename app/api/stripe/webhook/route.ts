import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret) return NextResponse.json({ error: "Webhook no configurado" }, { status: 400 });
  try {
    const event = getStripe().webhooks.constructEvent(await request.text(), signature, secret);
    switch (event.type) {
      case "checkout.session.completed":
      case "invoice.paid":
      case "customer.subscription.deleted":
        // Persistir el evento de forma idempotente en la base de datos en producción.
        console.info(`[stripe] ${event.type}`, event.id);
        break;
    }
    return NextResponse.json({ received: true });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Firma inválida" }, { status: 400 }); }
}
