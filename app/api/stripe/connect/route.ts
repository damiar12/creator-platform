import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST() {
  try {
    const stripe = getStripe();
    const account = await stripe.accounts.create({ type: "express", capabilities: { card_payments: { requested: true }, transfers: { requested: true } } });
    const origin = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const link = await stripe.accountLinks.create({ account: account.id, refresh_url: `${origin}/?stripe=refresh`, return_url: `${origin}/?stripe=success`, type: "account_onboarding" });
    return NextResponse.json({ accountId: account.id, url: link.url });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Error de Stripe" }, { status: 500 }); }
}
