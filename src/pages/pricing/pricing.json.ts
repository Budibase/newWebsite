import pricingData from "./_components/pricing.json";

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify(pricingData, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
