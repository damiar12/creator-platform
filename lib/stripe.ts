import Stripe from "stripe";
let stripeClient: Stripe | null = null;
export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY no está configurada");
  stripeClient ??= new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-09-30.acacia", typescript: true });
  return stripeClient;
}
